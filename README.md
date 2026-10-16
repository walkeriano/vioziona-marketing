This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Formulario de contacto (Formspree)

Configura `NEXT_FORMSPREE_ENDPOINT` con la URL de envío de tu formulario
(por ejemplo, `https://formspree.io/f/TU_FORM_ID`) en las variables del proyecto
en Vercel. Actívala para **Production** y, si quieres probar despliegues de
vista previa, también para **Preview**.

Después de añadir o cambiar la variable, vuelve a desplegar el proyecto:
la página de inicio se genera estáticamente y lee el valor durante el build.
La página del servidor pasa esta URL pública al formulario mediante una prop.
No leas esta variable directamente en un componente cliente: Next.js no expone
al navegador variables sin el prefijo `NEXT_PUBLIC_`.
El valor debe ser la URL de envío, no una clave API ni una URL del panel de Formspree.

Tras desplegar, envía una prueba desde el formulario publicado y comprueba
el mensaje de éxito y la recepción en Formspree y en el correo de destino.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
