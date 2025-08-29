module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key: 'mop.pem',
      user : 'ubuntu',
      host : 'ministry-of-power',
      ref  : 'origin/master',
      repo : 'git@github.com:IDCLofficial/ministry_of_power.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
