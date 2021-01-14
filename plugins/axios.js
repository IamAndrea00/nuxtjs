export default function ({ $axios, redirect, app }) {
  $axios.onRequest(config => {
    config.timeout = 60000;
  });

  $axios.onError(error => {
    console.log(error);
    if (error.code === 'ECONNABORTED') {
      app.$toast.error('Qualcosa è andato storto, riprovare più tardi', {
        action : {
          icon : 'error_outline'
        }})
    }
    // const code = error.response ? parseInt(error.response.status) : -1;
    // if (code === 400) {
    //   redirect('/400')
    // }
  });
}
