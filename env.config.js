switch (process.env.NODE_ENV) {
  case 'dev':
    process.env.BASE_URL = 'http://localhost:3000';
    process.env.API_URL = 'https://stage-backend.smart-tables.ru/api/v1/';
    process.env.ODDS_API_URL = 'https://stage-backend.smart-tables.ru/api/v1/odds/';
    process.env.HCAPTCHA_SITEKEY = '8cb91dda-e29d-4fb0-ae52-efcd5c77429e';
    break;
  case 'stage':
    process.env.BASE_URL = 'https://stage.smart-tables.ru';
    process.env.API_URL = 'https://stage-backend.smart-tables.ru/api/v1/';
    process.env.ODDS_API_URL = 'https://stage-backend.smart-tables.ru/api/v1/odds/';
    process.env.HCAPTCHA_SITEKEY = '8cb91dda-e29d-4fb0-ae52-efcd5c77429e';
    break;
  case 'stage2':
    process.env.BASE_URL = 'https://stage2.smart-tables.ru';
    process.env.API_URL = 'https://stage-backend.smart-tables.ru/api/v1/';
    process.env.ODDS_API_URL = 'https://stage-backend.smart-tables.ru/api/v1/odds/';
    process.env.HCAPTCHA_SITEKEY = '8cb91dda-e29d-4fb0-ae52-efcd5c77429e';
    break;
  case 'stage3':
    process.env.BASE_URL = 'https://stage3.smart-tables.ru';
    process.env.API_URL = 'https://stage-backend.smart-tables.ru/api/v1/';
    process.env.ODDS_API_URL = 'https://stage-backend.smart-tables.ru/api/v1/odds/';
    process.env.HCAPTCHA_SITEKEY = '8cb91dda-e29d-4fb0-ae52-efcd5c77429e';
    break;
  case 'production':
    process.env.BASE_URL = 'https://smart-tables.ru';
    process.env.API_URL = 'https://backend.smart-tables.ru/api/v1/';
    process.env.ODDS_API_URL = 'https://backend.smart-tables.ru/api/v1/odds/';
    process.env.HCAPTCHA_SITEKEY = '8cb91dda-e29d-4fb0-ae52-efcd5c77429e';
    break;
}
export default {
  API_URL: process.env.API_URL,
  ODDS_API_URL: process.env.ODDS_API_URL,
  BASE_URL: process.env.BASE_URL,
  HCAPTCHA_SITEKEY: process.env.HCAPTCHA_SITEKEY,
};
