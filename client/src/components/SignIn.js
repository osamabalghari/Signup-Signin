import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import userContext from '../context/userConrext'
import Alerts from './Alert'

const SignIn = (props) => {
  const context = useContext(userContext)
  const { setToken, handleAuthentication } = context
  const [alert, setAlert] = useState("")

  const alertClose = () => {
    setAlert("")
  }

  const [userInput, setUserInput] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const login = async () => {
    const response = await fetch("http://localhost:3002/api/auth/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: userInput.email, password: userInput.password })
    })

    const json = await response.json()
    console.log(json);
    if (json.success) {
      handleAuthentication(true)
      localStorage.setItem('auth_token', json.token);
      navigate("/welcome")

    } else {
      setAlert(json.message)

    }
    //console.log(json);
  }

  const change = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Alerts alert={alert} alertClose={alertClose} />
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                      <form class="mx-1 mx-md-4">


                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control" name="email" value={userInput.email} onChange={change} />
                            <label class="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" name="password" value={userInput.password} onChange={change} />
                            <label class="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>
                        <div class="form-check d-flex justify-content-center mb-5">
                          <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" class="btn btn-primary btn-lg" onClick={login}>Login</button>
                        </div>
                        <div><Link to="/signup">Don't Have Account?</Link></div>
                      </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn