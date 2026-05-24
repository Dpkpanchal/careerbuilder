// resources/js/Pages/Admin/Users/Create.jsx
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

const DemoPages = () => {
    return (
        <AdminLayout header="General Form">
            <Head title="Demo Pages" />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-6">
                            {/* general form elements */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Quick Example</h3>
                                </div>
                                {/* form start */}
                                <form>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="exampleInputEmail1" 
                                                placeholder="Enter email" 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="exampleInputPassword1" 
                                                placeholder="Password" 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputFile">File input</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input 
                                                        type="file" 
                                                        className="custom-file-input" 
                                                        id="exampleInputFile" 
                                                    />
                                                    <label className="custom-file-label" htmlFor="exampleInputFile">
                                                        Choose file
                                                    </label>
                                                </div>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">Upload</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                type="checkbox" 
                                                className="form-check-input" 
                                                id="exampleCheck1" 
                                            />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    {/* card-body */}

                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                            {/* card */}

                            {/* general form elements */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Different Styles</h3>
                                </div>
                                <div className="card-body">
                                    <h4>Input</h4>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputBorder">
                                            Bottom Border only <code>.form-control-border</code>
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-border" 
                                            id="exampleInputBorder" 
                                            placeholder=".form-control-border" 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputBorderWidth2">
                                            Bottom Border only 2px Border <code>.form-control-border.border-width-2</code>
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-border border-width-2" 
                                            id="exampleInputBorderWidth2" 
                                            placeholder=".form-control-border.border-width-2" 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputRounded0">
                                            Flat <code>.rounded-0</code>
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control rounded-0" 
                                            id="exampleInputRounded0" 
                                            placeholder=".rounded-0" 
                                        />
                                    </div>
                                    <h4>Custom Select</h4>
                                    <div className="form-group">
                                        <label htmlFor="exampleSelectBorder">
                                            Bottom Border only <code>.form-control-border</code>
                                        </label>
                                        <select className="custom-select form-control-border" id="exampleSelectBorder">
                                            <option>Value 1</option>
                                            <option>Value 2</option>
                                            <option>Value 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleSelectBorderWidth2">
                                            Bottom Border only <code>.form-control-border.border-width-2</code>
                                        </label>
                                        <select className="custom-select form-control-border border-width-2" id="exampleSelectBorderWidth2">
                                            <option>Value 1</option>
                                            <option>Value 2</option>
                                            <option>Value 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleSelectRounded0">
                                            Flat <code>.rounded-0</code>
                                        </label>
                                        <select className="custom-select rounded-0" id="exampleSelectRounded0">
                                            <option>Value 1</option>
                                            <option>Value 2</option>
                                            <option>Value 3</option>
                                        </select>
                                    </div>
                                </div>
                                {/* card-body */}
                            </div>
                            {/* card */}

                            {/* Input addon */}
                            <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title">Input Addon</h3>
                                </div>
                                <div className="card-body">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">.00</span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="text" className="form-control" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">.00</span>
                                        </div>
                                    </div>

                                    <h4>With icons</h4>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-dollar-sign"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <i className="fas fa-ambulance"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="mt-4 mb-2">With checkbox and radio inputs</h5>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <input type="checkbox" />
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <input type="radio" />
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="mt-4 mb-2">With buttons</h5>

                                    <p>Large: <code>.input-group.input-group-lg</code></p>

                                    <div className="input-group input-group-lg mb-3">
                                        <div className="input-group-prepend">
                                            <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item">
                                                    <Link href="#">Action</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link href="#">Another action</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link href="#">Something else here</Link>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item">
                                                    <Link href="#">Separated link</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <p>Normal</p>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button type="button" className="btn btn-danger">Action</button>
                                        </div>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <p>Small <code>.input-group.input-group-sm</code></p>
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-append">
                                            <button type="button" className="btn btn-info btn-flat">Go!</button>
                                        </span>
                                    </div>
                                </div>
                                {/* card-body */}
                            </div>
                            {/* card */}

                            {/* Horizontal Form */}
                            <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title">Horizontal Form</h3>
                                </div>
                                {/* form start */}
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    id="inputEmail3" 
                                                    placeholder="Email" 
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-sm-10">
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="inputPassword3" 
                                                    placeholder="Password" 
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="offset-sm-2 col-sm-10">
                                                <div className="form-check">
                                                    <input 
                                                        type="checkbox" 
                                                        className="form-check-input" 
                                                        id="exampleCheck2" 
                                                    />
                                                    <label className="form-check-label" htmlFor="exampleCheck2">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card-body */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-info">Sign in</button>
                                        <button type="submit" className="btn btn-default float-right">Cancel</button>
                                    </div>
                                </form>
                            </div>
                            {/* card */}
                        </div>
                        {/* left column */}

                        {/* right column */}
                        <div className="col-md-6">
                            {/* Form Element sizes */}
                            <div className="card card-success">
                                <div className="card-header">
                                    <h3 className="card-title">Different Height</h3>
                                </div>
                                <div className="card-body">
                                    <input 
                                        className="form-control form-control-lg" 
                                        type="text" 
                                        placeholder=".form-control-lg" 
                                    />
                                    <br />
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        placeholder="Default input" 
                                    />
                                    <br />
                                    <input 
                                        className="form-control form-control-sm" 
                                        type="text" 
                                        placeholder=".form-control-sm" 
                                    />
                                </div>
                            </div>
                            {/* card */}

                            <div className="card card-danger">
                                <div className="card-header">
                                    <h3 className="card-title">Different Width</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <input type="text" className="form-control" placeholder=".col-3" />
                                        </div>
                                        <div className="col-4">
                                            <input type="text" className="form-control" placeholder=".col-4" />
                                        </div>
                                        <div className="col-5">
                                            <input type="text" className="form-control" placeholder=".col-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card */}

                            {/* General form elements disabled */}
                            <div className="card card-warning">
                                <div className="card-header">
                                    <h3 className="card-title">General Elements</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* text input */}
                                                <div className="form-group">
                                                    <label>Text</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Enter ..." 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Text Disabled</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Enter ..." 
                                                        disabled 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* textarea */}
                                                <div className="form-group">
                                                    <label>Textarea</label>
                                                    <textarea 
                                                        className="form-control" 
                                                        rows="3" 
                                                        placeholder="Enter ..."
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Textarea Disabled</label>
                                                    <textarea 
                                                        className="form-control" 
                                                        rows="3" 
                                                        placeholder="Enter ..." 
                                                        disabled
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        {/* input states */}
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor="inputSuccess">
                                                <i className="fas fa-check"></i> Input with success
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control is-valid" 
                                                id="inputSuccess" 
                                                placeholder="Enter ..." 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor="inputWarning">
                                                <i className="far fa-bell"></i> Input with warning
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control is-warning" 
                                                id="inputWarning" 
                                                placeholder="Enter ..." 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor="inputError">
                                                <i className="far fa-times-circle"></i> Input with error
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control is-invalid" 
                                                id="inputError" 
                                                placeholder="Enter ..." 
                                            />
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* checkbox */}
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label">Checkbox</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultChecked />
                                                        <label className="form-check-label">Checkbox checked</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" disabled />
                                                        <label className="form-check-label">Checkbox disabled</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                {/* radio */}
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="radio1" />
                                                        <label className="form-check-label">Radio</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="radio1" defaultChecked />
                                                        <label className="form-check-label">Radio checked</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" disabled />
                                                        <label className="form-check-label">Radio disabled</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* select */}
                                                <div className="form-group">
                                                    <label>Select</label>
                                                    <select className="form-control">
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Select Disabled</label>
                                                    <select className="form-control" disabled>
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* Select multiple*/}
                                                <div className="form-group">
                                                    <label>Select Multiple</label>
                                                    <select multiple className="form-control">
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Select Multiple Disabled</label>
                                                    <select multiple className="form-control" disabled>
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* card */}

                            {/* Custom Elements */}
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Custom Elements</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* checkbox */}
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" type="checkbox" id="customCheckbox1" value="option1" />
                                                        <label htmlFor="customCheckbox1" className="custom-control-label">Custom Checkbox</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" type="checkbox" id="customCheckbox2" defaultChecked />
                                                        <label htmlFor="customCheckbox2" className="custom-control-label">Custom Checkbox checked</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" type="checkbox" id="customCheckbox3" disabled />
                                                        <label htmlFor="customCheckbox3" className="custom-control-label">Custom Checkbox disabled</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input custom-control-input-danger" type="checkbox" id="customCheckbox4" defaultChecked />
                                                        <label htmlFor="customCheckbox4" className="custom-control-label">Custom Checkbox with custom color</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input custom-control-input-danger custom-control-input-outline" type="checkbox" id="customCheckbox5" defaultChecked />
                                                        <label htmlFor="customCheckbox5" className="custom-control-label">Custom Checkbox with custom color outline</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                {/* radio */}
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" type="radio" id="customRadio1" name="customRadio" />
                                                        <label htmlFor="customRadio1" className="custom-control-label">Custom Radio</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" type="radio" id="customRadio2" name="customRadio" defaultChecked />
                                                        <label htmlFor="customRadio2" className="custom-control-label">Custom Radio checked</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" type="radio" id="customRadio3" disabled />
                                                        <label htmlFor="customRadio3" className="custom-control-label">Custom Radio disabled</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input custom-control-input-danger" type="radio" id="customRadio4" name="customRadio2" defaultChecked />
                                                        <label htmlFor="customRadio4" className="custom-control-label">Custom Radio with custom color</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input custom-control-input-danger custom-control-input-outline" type="radio" id="customRadio5" name="customRadio2" />
                                                        <label htmlFor="customRadio5" className="custom-control-label">Custom Radio with custom color outline</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* select */}
                                                <div className="form-group">
                                                    <label>Custom Select</label>
                                                    <select className="custom-select">
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Custom Select Disabled</label>
                                                    <select className="custom-select" disabled>
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* Select multiple*/}
                                                <div className="form-group">
                                                    <label>Custom Select Multiple</label>
                                                    <select multiple className="custom-select">
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Custom Select Multiple Disabled</label>
                                                    <select multiple className="custom-select" disabled>
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                        <option>option 4</option>
                                                        <option>option 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                <label className="custom-control-label" htmlFor="customSwitch1">
                                                    Toggle this custom switch element
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                                                <label className="custom-control-label" htmlFor="customSwitch3">
                                                    Toggle this custom switch element with custom colors danger/success
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
                                                <label className="custom-control-label" htmlFor="customSwitch2">
                                                    Disabled custom switch element
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="customRange1">Custom range</label>
                                            <input type="range" className="custom-range" id="customRange1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="customRange2">Custom range (custom-range-danger)</label>
                                            <input type="range" className="custom-range custom-range-danger" id="customRange2" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="customRange3">Custom range (custom-range-teal)</label>
                                            <input type="range" className="custom-range custom-range-teal" id="customRange3" />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" htmlFor="customFile">
                                                    Choose file
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* card */}
                        </div>
                        {/* right column */}
                    </div>
                    {/* row */}
                </div>
                {/* container-fluid */}
            </section>
            <section className="content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Bordered Table</h3>
                              </div>
                              <div className="card-body">
                                  <table className="table table-bordered">
                                      <thead>
                                          <tr>
                                              <th style={{width: '10px'}}>#</th>
                                              <th>Task</th>
                                              <th>Progress</th>
                                              <th style={{width: '40px'}}>Label</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>1.</td>
                                              <td>Update software</td>
                                              <td>
                                                  <div className="progress progress-xs">
                                                      <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-danger">55%</span></td>
                                          </tr>
                                          <tr>
                                              <td>2.</td>
                                              <td>Clean database</td>
                                              <td>
                                                  <div className="progress progress-xs">
                                                      <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-warning">70%</span></td>
                                          </tr>
                                          <tr>
                                              <td>3.</td>
                                              <td>Cron job running</td>
                                              <td>
                                                  <div className="progress progress-xs progress-striped active">
                                                      <div className="progress-bar bg-primary" style={{width: '30%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-primary">30%</span></td>
                                          </tr>
                                          <tr>
                                              <td>4.</td>
                                              <td>Fix and squish bugs</td>
                                              <td>
                                                  <div className="progress progress-xs progress-striped active">
                                                      <div className="progress-bar bg-success" style={{width: '90%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-success">90%</span></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              <div className="card-footer clearfix">
                                  <ul className="pagination pagination-sm m-0 float-right">
                                      <li className="page-item"><a className="page-link" href="#">«</a></li>
                                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                                      <li className="page-item"><a className="page-link" href="#">»</a></li>
                                  </ul>
                              </div>
                          </div>

                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Condensed Full Width Table</h3>
                              </div>
                              <div className="card-body p-0">
                                  <table className="table table-sm">
                                      <thead>
                                          <tr>
                                              <th style={{width: '10px'}}>#</th>
                                              <th>Task</th>
                                              <th>Progress</th>
                                              <th style={{width: '40px'}}>Label</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>1.</td>
                                              <td>Update software</td>
                                              <td>
                                                  <div className="progress progress-xs">
                                                      <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-danger">55%</span></td>
                                          </tr>
                                          <tr>
                                              <td>2.</td>
                                              <td>Clean database</td>
                                              <td>
                                                  <div className="progress progress-xs">
                                                      <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-warning">70%</span></td>
                                          </tr>
                                          <tr>
                                              <td>3.</td>
                                              <td>Cron job running</td>
                                              <td>
                                                  <div className="progress progress-xs progress-striped active">
                                                      <div className="progress-bar bg-primary" style={{width: '30%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-primary">30%</span></td>
                                          </tr>
                                          <tr>
                                              <td>4.</td>
                                              <td>Fix and squish bugs</td>
                                              <td>
                                                  <div className="progress progress-xs progress-striped active">
                                                      <div className="progress-bar bg-success" style={{width: '90%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-success">90%</span></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Simple Full Width Table</h3>
                                  <div className="card-tools">
                                      <ul className="pagination pagination-sm float-right">
                                          <li className="page-item"><a className="page-link" href="#">«</a></li>
                                          <li className="page-item"><a className="page-link" href="#">1</a></li>
                                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                                          <li className="page-item"><a className="page-link" href="#">»</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="card-body p-0">
                                  <table className="table">
                                      <thead>
                                          <tr>
                                              <th style={{width: '10px'}}>#</th>
                                              <th>Task</th>
                                              <th>Progress</th>
                                              <th style={{width: '40px'}}>Label</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>1.</td>
                                              <td>Update software</td>
                                              <td>
                                                  <div className="progress progress-xs">
                                                      <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-danger">55%</span></td>
                                          </tr>
                                          <tr>
                                              <td>2.</td>
                                              <td>Clean database</td>
                                              <td>
                                                  <div className="progress progress-xs">
                                                      <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-warning">70%</span></td>
                                          </tr>
                                          <tr>
                                              <td>3.</td>
                                              <td>Cron job running</td>
                                              <td>
                                                  <div className="progress progress-xs progress-striped active">
                                                      <div className="progress-bar bg-primary" style={{width: '30%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-primary">30%</span></td>
                                          </tr>
                                          <tr>
                                              <td>4.</td>
                                              <td>Fix and squish bugs</td>
                                              <td>
                                                  <div className="progress progress-xs progress-striped active">
                                                      <div className="progress-bar bg-success" style={{width: '90%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-success">90%</span></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>

                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Striped Full Width Table</h3>
                              </div>
                              <div className="card-body p-0">
                                  <table className="table table-striped">
                                      <thead>
                                          <tr>
                                              <th style={{width: '10px'}}>#</th>
                                              <th>Task</th>
                                              <th>Progress</th>
                                              <th style={{width: '40px'}}>Label</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>1.</td>
                                              <td>Update software</td>
                                              <td>
                                                  <div className="progress progress-xs">
                                                      <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-danger">55%</span></td>
                                          </tr>
                                          <tr>
                                              <td>2.</td>
                                              <td>Clean database</td>
                                              <td>
                                                  <div className="progress progress-xs">
                                                      <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-warning">70%</span></td>
                                          </tr>
                                          <tr>
                                              <td>3.</td>
                                              <td>Cron job running</td>
                                              <td>
                                                  <div className="progress progress-xs progress-striped active">
                                                      <div className="progress-bar bg-primary" style={{width: '30%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-primary">30%</span></td>
                                          </tr>
                                          <tr>
                                              <td>4.</td>
                                              <td>Fix and squish bugs</td>
                                              <td>
                                                  <div className="progress progress-xs progress-striped active">
                                                      <div className="progress-bar bg-success" style={{width: '90%'}}></div>
                                                  </div>
                                              </td>
                                              <td><span className="badge bg-success">90%</span></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-12">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Responsive Hover Table</h3>
                                  <div className="card-tools">
                                      <div className="input-group input-group-sm" style={{width: '150px'}}>
                                          <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                          <div className="input-group-append">
                                              <button type="submit" className="btn btn-default">
                                                  <i className="fas fa-search"></i>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="card-body table-responsive p-0">
                                  <table className="table table-hover text-nowrap">
                                      <thead>
                                          <tr>
                                              <th>ID</th>
                                              <th>User</th>
                                              <th>Date</th>
                                              <th>Status</th>
                                              <th>Reason</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>183</td>
                                              <td>John Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-success">Approved</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>219</td>
                                              <td>Alexander Pierce</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-warning">Pending</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>657</td>
                                              <td>Bob Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-primary">Approved</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>175</td>
                                              <td>Mike Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-danger">Denied</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-12">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Fixed Header Table</h3>
                                  <div className="card-tools">
                                      <div className="input-group input-group-sm" style={{width: '150px'}}>
                                          <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                          <div className="input-group-append">
                                              <button type="submit" className="btn btn-default">
                                                  <i className="fas fa-search"></i>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="card-body table-responsive p-0" style={{height: '300px'}}>
                                  <table className="table table-head-fixed text-nowrap">
                                      <thead>
                                          <tr>
                                              <th>ID</th>
                                              <th>User</th>
                                              <th>Date</th>
                                              <th>Status</th>
                                              <th>Reason</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>183</td>
                                              <td>John Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-success">Approved</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>219</td>
                                              <td>Alexander Pierce</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-warning">Pending</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>657</td>
                                              <td>Bob Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-primary">Approved</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>175</td>
                                              <td>Mike Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-danger">Denied</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>134</td>
                                              <td>Jim Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-success">Approved</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>494</td>
                                              <td>Victoria Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-warning">Pending</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>832</td>
                                              <td>Michael Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-primary">Approved</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr>
                                              <td>982</td>
                                              <td>Rocky Doe</td>
                                              <td>11-7-2014</td>
                                              <td><span className="tag tag-danger">Denied</span></td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-12">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Expandable Table</h3>
                              </div>
                              <div className="card-body">
                                  <table className="table table-bordered table-hover">
                                      <thead>
                                          <tr>
                                              <th>#</th>
                                              <th>User</th>
                                              <th>Date</th>
                                              <th>Status</th>
                                              <th>Reason</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr data-widget="expandable-table" aria-expanded="false">
                                              <td>183</td>
                                              <td>John Doe</td>
                                              <td>11-7-2014</td>
                                              <td>Approved</td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr className="expandable-body d-none">
                                              <td colSpan="5">
                                                  <p style={{display: 'none'}}>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                  </p>
                                              </td>
                                          </tr>
                                          <tr data-widget="expandable-table" aria-expanded="true">
                                              <td>219</td>
                                              <td>Alexander Pierce</td>
                                              <td>11-7-2014</td>
                                              <td>Pending</td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr className="expandable-body">
                                              <td colSpan="5">
                                                  <p>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                  </p>
                                              </td>
                                          </tr>
                                          <tr data-widget="expandable-table" aria-expanded="true">
                                              <td>657</td>
                                              <td>Alexander Pierce</td>
                                              <td>11-7-2014</td>
                                              <td>Approved</td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr className="expandable-body">
                                              <td colSpan="5">
                                                  <p>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                  </p>
                                              </td>
                                          </tr>
                                          <tr data-widget="expandable-table" aria-expanded="false">
                                              <td>175</td>
                                              <td>Mike Doe</td>
                                              <td>11-7-2014</td>
                                              <td>Denied</td>
                                              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                          </tr>
                                          <tr className="expandable-body d-none">
                                              <td colSpan="5">
                                                  <p style={{display: 'none'}}>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                  </p>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-12">
                          <div className="card">
                              <div className="card-header">
                                  <h3 className="card-title">Expandable Table Tree</h3>
                              </div>
                              <div className="card-body p-0">
                                  <table className="table table-hover">
                                      <tbody>
                                          <tr>
                                              <td className="border-0">183</td>
                                          </tr>
                                          <tr data-widget="expandable-table" aria-expanded="true">
                                              <td>
                                                  <i className="expandable-table-caret fas fa-caret-right fa-fw"></i>
                                                  219
                                              </td>
                                          </tr>
                                          <tr className="expandable-body">
                                              <td>
                                                  <div className="p-0">
                                                      <table className="table table-hover">
                                                          <tbody>
                                                              <tr data-widget="expandable-table" aria-expanded="false">
                                                                  <td>
                                                                      <i className="expandable-table-caret fas fa-caret-right fa-fw"></i>
                                                                      219-1
                                                                  </td>
                                                              </tr>
                                                              <tr className="expandable-body d-none">
                                                                  <td>
                                                                      <div className="p-0" style={{display: 'none'}}>
                                                                          <table className="table table-hover">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td>219-1-1</td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td>219-1-2</td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td>219-1-3</td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr data-widget="expandable-table" aria-expanded="false">
                                                                  <td>
                                                                      <button type="button" className="btn btn-primary p-0">
                                                                          <i className="expandable-table-caret fas fa-caret-right fa-fw"></i>
                                                                      </button>
                                                                      219-2
                                                                  </td>
                                                              </tr>
                                                              <tr className="expandable-body d-none">
                                                                  <td>
                                                                      <div className="p-0" style={{display: 'none'}}>
                                                                          <table className="table table-hover">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td>219-2-1</td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td>219-2-2</td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td>219-2-3</td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td>219-3</td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </div>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>657</td>
                                          </tr>
                                          <tr>
                                              <td>175</td>
                                          </tr>
                                          <tr>
                                              <td>134</td>
                                          </tr>
                                          <tr>
                                              <td>494</td>
                                          </tr>
                                          <tr>
                                              <td>832</td>
                                          </tr>
                                          <tr>
                                              <td>982</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </AdminLayout>
    );
};

export default DemoPages;