export const requestReceivedMail = (
  data: any
) => {
  switch (data.lang) {
    case 'ru':
      return {
        to: data.email,
        from: process.env.EMAIL_FROM, subject: 'Заявка получена',
        html: `
        <table role="presentation" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" >
          <tr>
              <td style="padding: 24px; background-color: #22c55e; color: #fff; border-radius: 16px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                          <td style="padding-right: 12px;">
                              <img src="https://api.igoshev.de/icons/logo-white.png" width="24" height="24" alt="Logo">
                          </td>
                          <td style="font-size: 24px; font-weight: bold; font-family: Montserrat, sans-serif; color: #fff;">IGOSHEV</td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td style="padding: 24px 0 0;">
                  <p style="margin-bottom: 24px; color: #000;">Мы получили вашу заявку!</p>
                  <p style="margin-bottom: 24px; color: #000;">В самое ближайшее время мы свяжемся с вами, чтобы обсудить детали.</p>
                  <p style="margin-top: 24px; color: #000;">Спасибо, что выбрали нас.<br/>Команда IGOSHEV</p>
              </td>
          </tr>
      </table>
              `
      }
    case 'de':
      return {
        to: data.email,
        from: process.env.EMAIL_FROM, subject: 'Anfrage eingegangen',
        html: `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #374151; border-radius: 20px; padding: 24px;">
        <tr>
            <td style="padding: 24px; background-color: #22c55e; color: #fff; border-radius: 16px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                        <td style="padding-right: 12px;">
                            <img src="https://api.igoshev.de/icons/logo-white.png" width="24" height="24" alt="Logo">
                        </td>
                        <td style="font-size: 24px; font-weight: bold; font-family: Montserrat, sans-serif; color: #fff;">IGOSHEV</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding: 24px 0 0;">
                <p style="margin-bottom: 24px; color: #fff;">Wir haben Ihre Anfrage erhalten!</p>
                <p style="margin-bottom: 24px; color: #fff;">Wir werden uns bald mit Ihnen in Verbindung setzen, um die Details zu besprechen.</p>
                <p style="margin-top: 24px; color: #fff;">Danke, dass Sie uns gewählt haben.<br/>IGOSHEV Team</p>
            </td>
        </tr>
    </table>
            `
      }
    default:
      return {
        to: data.email,
        from: process.env.EMAIL_FROM, subject: 'The request has been received',
        html: `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #374151; border-radius: 20px; padding: 24px;">
          <tr>
              <td style="padding: 24px; background-color: #22c55e; color: #fff; border-radius: 16px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                          <td style="padding-right: 12px;">
                              <img src="https://api.igoshev.de/icons/logo-white.png" width="24" height="24" alt="Logo">
                          </td>
                          <td style="font-size: 24px; font-weight: bold; font-family: Montserrat, sans-serif; color: #fff;">IGOSHEV</td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td style="padding: 24px 0 0;">
                  <p style="margin-bottom: 24px; color: #fff;">We have received your request!</p>
                  <p style="margin-bottom: 24px; color: #fff;">We will contact you as soon as possible to discuss the details.</p>
                  <p style="margin-top: 24px; color: #fff;">Thank you for choosing us.<br/>The IGOSHEV team</p>
              </td>
          </tr>
      </table>
              `
      }
  }
}