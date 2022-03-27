<template>
<div class="body">
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <div>
              <div class="form-floating mb-3">
                <input v-model="user.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input v-model="user.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                <label class="form-check-label" for="rememberPasswordCheck">
                  Şifremi hatırla
                </label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" @click="tryLogin" type="submit">Giriş Yap</button>
              </div>
              <hr class="my-4">
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" @click="$router.push('/register')" type="submit">Yeni Hesap Oluştur</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import Api from "@/api/apiClient";
export default{
  name:"LoginPage",
  data(){
    return{
      user:{
        email:"",
        password:""
      }
    }
  },
  methods:{
    tryLogin(){
      if(this.user.email !="" &&this.user.password !=""){
        Api.login(this.user).then(res=>{
          console.log("Login page:=",res);
          if(res.id){
            window.localStorage.setItem("processId", res.id);
            this.$store.commit("setUser",res);
            this.$router.push({name:"HomePage"})
          }
        })
      }else{
        console.log("Giriş başarısız")
      }
    }
  }
}

</script>


<style>

.body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}

</style>