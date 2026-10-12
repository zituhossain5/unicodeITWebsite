# Unicode IT deployment

This is a standalone Next.js app deployed with Docker Compose. Traefik routes
`unicodeit.com` and `www.unicodeit.com` to the `web` container on the existing
external `app_plane` network. Contact form delivery runs server-side through
Uni Mail Hub; the browser never receives its API key.

## Local contact test

In the project root on Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Edit `.env.local` and fill in the real Unicode IT project key and the managed
`contact@unicodeit.com` mailbox ID:

```dotenv
UNI_MAIL_HUB_URL=https://mailhub.unicodeit.com
UNI_MAIL_HUB_API_KEY=<private Unicode IT project API key>
UNI_MAIL_HUB_MAILBOX_ID=<contact@unicodeit.com mailbox ID>
CONTACT_FORM_ALLOWED_ORIGIN=http://localhost:3000
```

Do not commit `.env.local`; it is ignored by Git. Start the site with
`npm install` (if needed) and `npm run dev`, then open
`http://localhost:3000/contact`. Fill the existing required service and budget
fields and submit with name `Local Test`, an email address you control, and
message `Testing UnicodeIT contact form through Uni Mail Hub.` The form should
show its usual success state. In Uni Mail Hub, check **Outgoing Mail** for the
message progressing from `QUEUED` to `PROCESSING` to `SMTP_ACCEPTED`. Confirm
that `contact@unicodeit.com` receives it and that Reply addresses the visitor
email. This is the one real-email test; automated tests mock Mail Hub.

If the form shows an error, check `UNI_MAIL_HUB_API_KEY`,
`UNI_MAIL_HUB_MAILBOX_ID`, and the local server logs. The endpoint returns a
generic delivery error to visitors and logs only a Mail Hub status code or
accepted message ID, never credentials.

## VPS configuration

After pushing the code, on the VPS:

```bash
cd ~/projects/unicodeit
git pull
cp .env.example .env.production  # only if .env.production does not exist yet
chmod 600 .env.production
```

Edit `.env.production` with the production Unicode IT API key and mailbox ID.
Keep `UNI_MAIL_HUB_URL=https://mailhub.unicodeit.com` and set:

```dotenv
CONTACT_FORM_ALLOWED_ORIGIN=https://unicodeit.com,https://www.unicodeit.com
```

`docker-compose.yml` loads `.env.production` into the `web` container at
runtime. The file is ignored by Git and excluded from the Docker build context,
so secrets are not baked into the image. Do not use `NEXT_PUBLIC_` for these
values. Docker Compose requires this file even when you are only running a
local Compose build; `npm run dev` uses `.env.local` instead.

```bash
docker compose up -d --build
docker compose logs --tail=100 web
```

Test the production contact form once after deployment and check Uni Mail Hub
Outgoing Mail and the recipient mailbox. To rotate credentials, edit
`.env.production` and run `docker compose up -d` to recreate the container with
the new environment.
