export const newApplicationMail = (data: any) => ({
  to: process.env.EMAIL_FROM,
  from: process.env.EMAIL_FROM,
  subject: 'Новая заявка',
  html: `
            <h3>Поступила новая заявка от ${
              data.name ? data.name : data.email
            }.</h3>
            <br/>
            <p>Имя: ${data.name}</p> 
            <p>Email: ${data.email}</p> 
            <p>Телефон: ${data.phone}</p> 
            <p>Тип услуги: ${data.type}</p> 
            <p>Услуга: ${data.service}</p> 
            <p>Описание: ${data.desc}</p> 
            <p>Ссылка на файл: ${data.file}</p> 
        `,
});
