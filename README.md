# Therapy Practice Prototype

A complete mobile-first Next.js therapy-practice website driven by one business data file.

## Run

```bash
npm install
npm run dev
```

Then open:

http://localhost:3000/inner-calm-counseling

## Add another business

Open:

`data/business.js`

Add another object to `businesses` using a new slug. The dynamic route in `app/[slug]/page.jsx` will render it automatically.

## Change the theme

Each business has:

- `primary`
- `primaryDark`
- `accent`
- `soft`
- `cream`

Components consume these through CSS variables. No business-specific colors are hardcoded into component CSS.

## Replace content

Business name, therapist, services, testimonials, fees, FAQs, contact details, navigation and images all live in `data/business.js`.

## Note

The contact form is intentionally a prototype form and does not send email yet. Connect it to your preferred form/email backend when converting the prototype into a production site.
