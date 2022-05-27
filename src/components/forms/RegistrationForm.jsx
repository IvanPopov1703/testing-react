import React, {useState} from 'react';

const RegistrationForm = () => {

    const clickBtnRegistration = () => {
        let forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add('was-validated');
                }

            }, false);
        });
    }

    return (
        <div>
            <h3 className="textLogin">Регистрация</h3>
            <form className="needs-validation" noValidate>
                <div className="row">
                    <div className="col-md-4 mb-3 w-50">
                        <label htmlFor="loginInpId">Логин</label>
                        <input type="text" className="form-control" id="loginInpId" placeholder="Логин"
                               required/>
                        <div className="valid-feedback">
                            Поле должно быть заполнено!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 w-50">
                        <label htmlFor="emailInpId">Электронный адрес</label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailInpId"
                            placeholder="Электронный адрес"
                            required
                        />
                        <div className="valid-feedback">
                            Поле должно быть заполнено!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3 w-50">
                        <label htmlFor="passInpId">Пароль</label>
                        <input type="password" className="form-control" id="passInpId" placeholder="Пароль"
                               required/>
                        <div className="valid-feedback">
                            Поле должно быть заполнено!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 w-50">
                        <label htmlFor="passConfirmInpId">Подтверждение пароля</label>
                        <input
                            type="password"
                            className="form-control"
                            id="passConfirmInpId"
                            placeholder="Подтверждение пароля"
                            required
                        />
                        <div className="valid-feedback">
                            Поле должно быть заполнено!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3 w-50">
                        <label htmlFor="surnameInpId">Фамилия</label>
                        <input type="text" className="form-control" id="surnameInpId" placeholder="Фамилия"
                               required/>
                        <div className="valid-feedback">
                            Поле должно быть заполнено!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 w-50">
                        <label htmlFor="nameInpId">Имя</label>
                        <input type="text" className="form-control" id="nameInpId" placeholder="Имя"
                               required/>
                        <div className="valid-feedback">
                            Поле должно быть заполнено!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3 w-50">
                        <label htmlFor="patronymicInpId">Отчество</label>
                        <input type="text" className="form-control" id="patronymicInpId" placeholder="Отчество"
                               required/>
                        <div className="valid-feedback">
                            Поле должно быть заполнено!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 w-50">
                        <label htmlFor="phoneInpId">Телефон</label>
                        <input type="number" className="form-control" id="phoneInpId" placeholder="Телефон"
                               required/>
                        <div className="valid-feedback">
                            Поле должно быть заполнено!
                        </div>
                    </div>
                </div>
                <button onClick={clickBtnRegistration} style={{marginLeft: '150px'}} className="btn btn-primary" type="submit">Зарегистироваться</button>
            </form>
        </div>
);
};

export default RegistrationForm;
