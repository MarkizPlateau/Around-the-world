
export default ({ env }) => ({
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST'),
            port: env('SMTP_PORT'),
            auth: {
              user: env('SMTP_USERNAME'),
              pass: env('SMTP_PASSWORD'),
            },
              },
          settings: {
            defaultFrom: env('SMTP_SENDER'),
            defaultReplyTo: env('SMTP_REPLY'),
          },
        },
      },
  });
