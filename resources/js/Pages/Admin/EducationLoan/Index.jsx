// resources/js/Pages/Admin/EducationLoan/Index.jsx
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const EducationLoanIndex = ({ loan }) => {

    const { data, setData, put, transform, processing, errors } = useForm({

        title: loan?.title || "GET EDUCATION LOAN at the lowest Rate of Interest @ 3% p.a.!",
        subtitle: loan?.subtitle || "www.wbmdfc.net",
        eligibility: loan?.eligibility || "Students domiciled in WB and pursuing Technical and Professional courses, Medical/ Engineering/ Law/Nursing/ Diploma/ Management/ BCA/ MCA etc.",
        application_process: loan?.application_process || "Students must apply ONLINE from July to October, every year at www.wbmdfc.net\nHe / She need to take a print out of the application and get it verified by the institution.",
        age_group: loan?.age_group || "within 32 years",

        // income_rates.categories is now edited as repeatable rows instead
        // of a raw JSON textarea.
        categories: loan?.income_rates?.categories?.length
            ? loan.income_rates.categories
            : [
                { category: "Both Male & Female", rural: "Upto ₹81,000", urban: "Upto ₹1,03,000", interest: "3% p.a." },
                { category: "Male", rural: "From ₹81,001 to ₹6,00,000", urban: "From ₹1,03,001 to ₹6,00,000", interest: "" },
                { category: "Female", rural: "From ₹81,001 to ₹6,00,000", urban: "From ₹1,03,001 to ₹6,00,000", interest: "" },
            ],

        disbursement_info: loan?.disbursement_info || "Eligible students, if selected for loan, will be required to open a joint account in the name of student and parent or legal guardian.",
        loan_care_link: loan?.loan_care_link || "https://www.myloancare.in/education-loan-interest/",
        vidya_lakshmi_link: loan?.vidya_lakshmi_link || "https://www.vidyalakshmi.co.in/Students/",
        meta_title: loan?.meta_title || "Education Loans - Career Builder",
        meta_description: loan?.meta_description || "Get education loan at the lowest Rate of Interest @ 3% p.a.!",
        is_active: loan?.is_active ?? true,

    });

    const addCategoryRow = () => {

        setData("categories", [
            ...data.categories,
            { category: "", rural: "", urban: "", interest: "" },
        ]);

    };

    const removeCategoryRow = (index) => {

        if (data.categories.length === 1) return;

        setData("categories", data.categories.filter((_, i) => i !== index));

    };

    const updateCategoryRow = (index, key, value) => {

        const categories = [...data.categories];

        categories[index] = { ...categories[index], [key]: value };

        setData("categories", categories);

    };

    const submit = (e) => {

        e.preventDefault();

        // income_rates is stored as { categories: [...] } in the DB —
        // rebuild that shape from the row list right before sending,
        // without changing the form's own `categories` state.
        transform((formData) => {

            const { categories, ...rest } = formData;

            return {
                ...rest,
                income_rates: { categories },
            };

        });

        put("/admin/education-loan");

    };

    return (

        <AdminLayout header="Education Loan Settings">

            <Head title="Education Loan Settings" />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-12">

                        <div className="card">

                            <div className="card-header">
                                <h3 className="card-title">Education Loan Page Settings</h3>
                            </div>

                            <form onSubmit={submit}>

                                <div className="card-body">

                                    {/* Main Title */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Main Title</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                                                    value={data.title}
                                                    onChange={(e) => setData("title", e.target.value)}
                                                />
                                                {errors.title && (
                                                    <div className="invalid-feedback">{errors.title}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtitle */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Subtitle</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.subtitle ? "is-invalid" : ""}`}
                                                    value={data.subtitle}
                                                    onChange={(e) => setData("subtitle", e.target.value)}
                                                />
                                                {errors.subtitle && (
                                                    <div className="invalid-feedback">{errors.subtitle}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Eligibility — plain textarea */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Eligibility</label>
                                                <textarea
                                                    className={`form-control ${errors.eligibility ? "is-invalid" : ""}`}
                                                    rows="5"
                                                    value={data.eligibility}
                                                    onChange={(e) => setData("eligibility", e.target.value)}
                                                />
                                                {errors.eligibility && (
                                                    <div className="invalid-feedback d-block">{errors.eligibility}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Application Process — plain textarea */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Application Process</label>
                                                <textarea
                                                    className={`form-control ${errors.application_process ? "is-invalid" : ""}`}
                                                    rows="5"
                                                    value={data.application_process}
                                                    onChange={(e) => setData("application_process", e.target.value)}
                                                />
                                                {errors.application_process && (
                                                    <div className="invalid-feedback d-block">{errors.application_process}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Age Group */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Age Group</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.age_group ? "is-invalid" : ""}`}
                                                    value={data.age_group}
                                                    onChange={(e) => setData("age_group", e.target.value)}
                                                />
                                                {errors.age_group && (
                                                    <div className="invalid-feedback">{errors.age_group}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    {/* Income Rates — dynamic add/remove rows */}
                                    <div className="form-group">

                                        <label>Income Rates</label>

                                        {errors.categories && (
                                            <div className="invalid-feedback d-block mb-2">{errors.categories}</div>
                                        )}

                                        {data.categories.map((row, index) => (

                                            <div className="card mb-2" key={index}>

                                                <div className="card-body py-2">

                                                    <div className="row align-items-start">

                                                        <div className="col-md-3 mb-2">
                                                            <input
                                                                type="text"
                                                                className={`form-control ${errors[`categories.${index}.category`] ? "is-invalid" : ""}`}
                                                                placeholder="Category (e.g. Male)"
                                                                value={row.category}
                                                                onChange={(e) => updateCategoryRow(index, "category", e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3 mb-2">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Rural income limit"
                                                                value={row.rural}
                                                                onChange={(e) => updateCategoryRow(index, "rural", e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3 mb-2">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Urban income limit"
                                                                value={row.urban}
                                                                onChange={(e) => updateCategoryRow(index, "urban", e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="col-md-2 mb-2">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Interest rate"
                                                                value={row.interest}
                                                                onChange={(e) => updateCategoryRow(index, "interest", e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="col-md-1 mb-2 text-right">
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() => removeCategoryRow(index)}
                                                                disabled={data.categories.length === 1}
                                                            >
                                                                <i className="fas fa-trash"></i>
                                                            </button>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        ))}

                                        <button
                                            type="button"
                                            className="btn btn-success btn-sm"
                                            onClick={addCategoryRow}
                                        >
                                            <i className="fas fa-plus mr-1"></i>
                                            Add Row
                                        </button>

                                    </div>

                                    <hr />

                                    {/* Disbursement Info — plain textarea */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Disbursement Information</label>
                                                <textarea
                                                    className={`form-control ${errors.disbursement_info ? "is-invalid" : ""}`}
                                                    rows="5"
                                                    value={data.disbursement_info}
                                                    onChange={(e) => setData("disbursement_info", e.target.value)}
                                                />
                                                {errors.disbursement_info && (
                                                    <div className="invalid-feedback d-block">{errors.disbursement_info}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* External Links */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>MyLoanCare Link</label>
                                                <input
                                                    type="url"
                                                    className={`form-control ${errors.loan_care_link ? "is-invalid" : ""}`}
                                                    placeholder="https://..."
                                                    value={data.loan_care_link}
                                                    onChange={(e) => setData("loan_care_link", e.target.value)}
                                                />
                                                {errors.loan_care_link && (
                                                    <div className="invalid-feedback">{errors.loan_care_link}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Vidya Lakshmi Link</label>
                                                <input
                                                    type="url"
                                                    className={`form-control ${errors.vidya_lakshmi_link ? "is-invalid" : ""}`}
                                                    placeholder="https://..."
                                                    value={data.vidya_lakshmi_link}
                                                    onChange={(e) => setData("vidya_lakshmi_link", e.target.value)}
                                                />
                                                {errors.vidya_lakshmi_link && (
                                                    <div className="invalid-feedback">{errors.vidya_lakshmi_link}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                 

                                    {/* Active Status */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="custom-control custom-switch">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="isActive"
                                                        checked={data.is_active}
                                                        onChange={(e) => setData("is_active", e.target.checked)}
                                                    />
                                                    <label className="custom-control-label" htmlFor="isActive">
                                                        Page Active
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing}
                                    >
                                        {processing ? "Saving..." : "Save Changes"}
                                    </button>
                                    <Link
                                        href="/admin/dashboard"
                                        className="btn btn-default ml-2"
                                    >
                                        Cancel
                                    </Link>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

};

export default EducationLoanIndex;
