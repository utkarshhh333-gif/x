# WhatsApp Contact Form Setup

This site uses a pure frontend WhatsApp form.

The visitor fills the form, clicks `Share on WhatsApp`, and the website opens WhatsApp with a prefilled project message.

## Add Your WhatsApp Link

Open `.env.local` and add:

```bash
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/919876543210
```

Replace `919876543210` with your real WhatsApp number in international format.

Do not include:

```text
+
spaces
dashes
brackets
```

For example, an Indian number should look like:

```bash
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/91XXXXXXXXXX
```

## Restart The Site

After editing `.env.local`, restart:

```bash
npm.cmd run dev
```

## Important Limit

Without the official WhatsApp Business API, a website cannot silently send a WhatsApp message in the background.

The free frontend method can only open WhatsApp with a prefilled message. The visitor still needs to press send inside WhatsApp.
