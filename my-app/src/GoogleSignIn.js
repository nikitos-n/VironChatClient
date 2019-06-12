import React from 'react';

class GoogleSignIn extends React.Component{
    
    state = {
        name: null,
      }
    
      componentDidMount(){
        window.gapi.load('auth2', function(){
          window.gapi.auth2.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
          }).then(() => console.log('Init Ok!'), () => console.log('Init with ERROR!'))
        })
      }
    
      signIn = () => {
        const _authOK = (googleUser) => {
          console.log('Authorization Completed!');
          console.log(googleUser);
          this.setState({
            name: googleUser.getBasicProfile().getName()
          })
        };
        const _authEr = () => console.log('Authorization ERROR');
    
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        GoogleAuth.signIn({
          scope: 'profile email',
        }).then(_authOK, _authEr);
      }
      

    render() {
        const {name} = this.state;
        return(
            <div className="container">
                <div className="row justify-content-center">
                    {name && <p>Приветствуем тебя {name} в нашем чате!</p>}
                    <button type="button" class="btn btn-danger" onClick={this.signIn}>Войти через Google</button>
                </div>
            </div>
        )
    }
}

export default GoogleSignIn;