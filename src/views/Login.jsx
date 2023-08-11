import React from 'react'

function Login() {
  return (
    <form action="#" method="post" class="card mt-5 w-50 mx-auto">
            <div class="card-header d-flex justify-content-center bg-dark text-light py-4">
                Log into Account
            </div>
            <div class="card-body">
                <div class="form-group">
                    <p>Email :</p>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                    <p>Password :</p>
                    <input type="password" class="form-control" />
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-dark my-3 " />
                    <p>New Here? <a href="/signup" style={{textDecoration:0}} >Sign up</a> </p>
                </div>
            </div>
            <div class="card-footer">
                <p class="d-flex justify-content-end">
                    Web App &copy; copyright 2023
                </p>
            </div>


        </form>

  )
}

export default Login