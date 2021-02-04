import React, { useState } from "react";
import { useForm } from "react-hook-form";
import redirectTo from "../services/redirect";
import { login } from "../services/authService";
import { Container } from "react-bootstrap";

function Login() {
  const { register, handleSubmit } = useForm();
  const [responseData, setResponseData] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  if (redirect) return redirectTo;

  const onSubmit = (data) => {
    setLoading(true);
    login(data)
      .then((response) => {
        setLoading(false);
        setRedirect(true);
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        setResponseData(error.response.data.message);
      });
  };

  return (
    <Container>
          <h2 className="text-center text-black h-10vh p-top-8">Se connecter</h2>
          <div className="reseaux-btn-container h-12vh">
              <button className="reseaux-login-btn btn-text ">G+</button>
              <button className="reseaux-login-btn btn-text ">fb</button>
          </div>
          <p>ou connectez-vous par email</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label for="email">
              <div className="poppins">Email</div>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              className="form-control"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label for="password">
              <div className="poppins">Mot de passe</div></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="password"
              className="form-control"
              ref={register({ required: true })}
            />
          </div>
          <button
            type="submit"
            className="c-button w-100 d-flex align-items-center justify-content-center"
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Se connecter</span>
          </button>
          <div>{responseData}</div>
        </form>
        <p className="p-top-3">Vous n'avez pas de compte?
          <a href="/register" className="text-yellow ">S'inscrire</a>
        </p>

    </Container>
  );
}

export default Login;