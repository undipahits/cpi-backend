import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '../../.env') })

const config = {
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',

  port: Number(process.env.PORT || 5000),
  logging: process.env.LOGGING === 'true',

  jwt: {
    secret: String(process.env.JWT_SECRET || 'secret'),
    expDays: Number(process.env.JWT_EXP_DAYS || 30),
  },

  smtp: {
    host: String(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: String(process.env.SMTP_USER),
      pass: String(process.env.SMTP_PASS),
    },
  },

  mailFrom: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,

  maskMinValue: {
    age: 1,
    price: 1,
    condition: 1,
  },
}

export default config
