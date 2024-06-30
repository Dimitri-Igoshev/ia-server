export const newApplicationMail = (data: any) => (
  {
    to: process.env.EMAIL_FROM,
    from: process.env.EMAIL_FROM,
    subject: 'Новая заявка',
    html: `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #edf2f7; border-radius: 20px; padding: 24px;">
      <tr>
          <td style="padding: 24px; background-color: #22c55e; color: #fff; border-radius: 16px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                      <td style="padding-right: 12px;">
                          <img src="https://api.igoshev.de/icons/logo-white.svg" width="24" height="24" alt="Logo">
                      </td>
                      <td style="font-size: 24px; font-weight: bold; font-family: Montserrat, sans-serif; color: #fff;">IGOSHEV</td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr>
          <td style="padding: 24px 0 0;">
              <p style="margin-bottom: 24px;">Поступила новая заявка от ${data?.name ? data.name : data.email
      }</p>
              <p>Бюджет на разработку: ${data?.budget || '-'}</p>
              <p>Описание задания: ${data?.task || '-'}</p>
              <p style="margin-bottom: 24px;"><a href="https://api.igoshev.de/${data.file}" style="color: #3b82f6; text-decoration: none; font-weight: bold;">Ссылка на прикрепленный файл</a></p>
              <p>Имя заказчика: ${data?.name || '-'}</p>
              <p>Телефон заказчика: ${data?.phone || '-'}</p>
              <p>Email заказчика: ${data?.email || '-'}</p>
              <p>Сообщение от заказчика: ${data?.message || '-'}</p>
              <p style="margin-top: 24px;">С уважением,<br/>Команда IGOSHEV</p>
          </td>
      </tr>
  </table>
              
          `,
  }
  //   {
  //   to: process.env.EMAIL_FROM,
  //   from: process.env.EMAIL_FROM,
  //   subject: 'Новая заявка',
  //   html: `
  //             <h3>Поступила новая заявка от ${
  //               data.name ? data.name : data.email
  //             }.</h3>
  //             <br/>
  //             <p>Имя: ${data.name}</p> 
  //             <p>Email: ${data.email}</p> 
  //             <p>Телефон: ${data.phone}</p> 
  //             <p>Тип услуги: ${data.type}</p> 
  //             <p>Услуга: ${data.service}</p> 
  //             <p>Описание: ${data.desc}</p> 
  //             <p>Ссылка на файл: https://api.igoshev.de/${data.file}</p> 
  //         `,
  // }
);
