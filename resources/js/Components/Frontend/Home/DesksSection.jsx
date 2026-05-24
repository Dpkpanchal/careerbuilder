// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// export default function DesksSection({leaders}) {
//   const [openDesk, setOpenDesk] = useState(null); // 'chair' | 'ceo' | null

//   return (
//     <>
//       <section className="py-5 desks-section mb-lg-5">
//         <div className="container">
//           <div className="row g-4">
//             {/* Chairperson’s Desk */}
//             <motion.div
//               className="col-md-6"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               <div className="desk-card bg-light">
//                 <div className="dhw mb-3">
//                   <div className="image-wrap shadow-lg">
//                     <img
//                       src="/images/salim.webp" loading='lazy'
//                       alt="Dr. P.B. Salim, IAS, Chairman, WBMDFC"
//                     />
//                   </div>
//                   <div className="d-flex flex-column">
//                     <h4 className="fw-medium text-white fs-5 mb-2">
//                       Dr. P.B. Salim <span className="dhwp">IAS</span>
//                     </h4>
//                     <p className="fw-medium text-muted mt-2">
//                       Secretary, MA & ME Deptt, WBMDFC
//                     </p>
//                   </div>
//                 </div>

//                 {/* Preview – first paragraph only */}
//                 <p>
//                   Underscoring the criticality of quality education and of
//                   skills, with an emphasis on making it universally accessible,
//                   the Government of West Bengal in the last few years has taken
//                   an all out effort in enabling activities such as building of
//                   schools, colleges, hostel buildings and skill development
//                   centres in areas inhabited by such backward sections of
//                   societies. The scholarship programme especially has brought
//                   about notable change amongst the students of such communities,
//                   who are increasingly becoming confident of pursuing both
//                   technical and higher studies for a brighter future.
//                 </p>

//                 <button
//                   type="button"
//                   className="btn btn-link btn-sm     small fw-normal p-0 mt-1"
//                   onClick={() => setOpenDesk("chair")}
//                 >
//                   Read More
//                 </button>
//               </div>
//             </motion.div>

//             {/* CEO’s Desk */}
//             <motion.div
//               className="col-md-6"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               <div className="desk-card ceo bg-light">
//                 <div className="dhw mb-3">
//                   <div className="image-wrap shadow-lg">
//                     <img
//                       src="/images/taheruzzaman.webp" loading='lazy'
//                       alt="Taheruzzaman, IAS, Managing Director, WBMDFC"
//                     />
//                   </div>
//                   <div className="d-flex flex-column">
//                     <h4 className="fw-medium text-white fs-5 mb-2">
//                       Taheruzzaman <span className="dhwp">WBCS (Exe.)</span>
//                     </h4>
//                     <p className="fw-medium text-muted mt-2">
//                       Managing Director, WBMDFC
//                     </p>
//                   </div>
//                 </div>

//                 {/* Preview – first paragraph only */}
//                 <p>
//                   The West Bengal Minorities’ Development and Finance
//                   Corporation (WBMDFC), a statutory Corporation of Govt. of West
//                   Bengal takes up various schemes for Economic Welfare,
//                   Scholarships, Education loan, mass awareness for persons
//                   belonging to the notified minority communities i.e, Buddhist,
//                   Christian, Jain, Muslim, Parsees and Sikh for their economic
//                   upliftment. WBMDFC also organizes Career counselling
//                   programmes to help students choose a field that is in tune
//                   with their skills and their job expectations.
//                 </p>

//                 <button
//                   type="button"
//                   className="btn btn-link btn-sm     small fw-normal p-0 mt-1"
//                   onClick={() => setOpenDesk("ceo")}
//                 >
//                   Read More
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Modal for full messages */}
//       <AnimatePresence>
//         {openDesk && (
//           <motion.div
//             className="auth-backdrop"
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby={
//               openDesk === "chair"
//                 ? "chair-message-title"
//                 : "ceo-message-title"
//             }
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setOpenDesk(null)}
//           >
//             <motion.div
//               className="desk-modal"
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, scale: 0.95, y: 12 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 12 }}
//               transition={{ duration: 0.18, ease: "easeOut" }}
//             >
//               <div className="desk-modal-inner card shadow-lg border-0">
//                 <button
//                   type="button"
//                   className="auth-close-btn"
//                   onClick={() => setOpenDesk(null)}
//                   aria-label="Close"
//                 >
//                   <X size={18} />
//                 </button>

//                 <div className="card-body p-3 p-sm-4">
//                   {openDesk === "chair" && (
//                     <>
//                       <header className="mb-3">
//                         <p className="text-uppercase small text-muted mb-1">
//                           From the Chairperson&apos;s Desk
//                         </p>
//                         <h2 id="chair-message-title" className="h5 mb-0">
//                           Dr. P.B. Salim, IAS – Chairman, WBMDFC
//                         </h2>
//                       </header>

//                       <p>
//                         Underscoring the criticality of quality education and of
//                         skills, with an emphasis on making it universally
//                         accessible, the Government of West Bengal in the last
//                         few years has taken an all out effort in enabling
//                         activities such as building of schools, colleges, hostel
//                         buildings and skill development centres in areas
//                         inhabited by such backward sections of societies. The
//                         scholarship programme especially has brought about
//                         notable change amongst the students of such communities,
//                         who are increasingly becoming confident of pursuing both
//                         technical and higher studies for a brighter future.
//                       </p>
//                       <p>
//                         For quite some time now the WBMDFC, through its various
//                         activities has been running various scholarship
//                         programmes for students amongst minorities. The
//                         programmes undertaken by this Corporation have played a
//                         vital role for the spread of education among the boys
//                         and girls from minority communities and the upliftment
//                         of the community as a whole.
//                       </p>
//                       <p>
//                         In a bid to cater to adequate information on the
//                         institutions offering courses as well as credible
//                         guidance for all the students of this state, West Bengal
//                         Minorities’ Development and Finance Corporation has in
//                         collaboration with Association SNAP, a philanthropic
//                         organization published this much-needed Handbook
//                         entitled, &quot;A Comprehensive Guidebook to Various
//                         Courses and Career options&quot; so that more and more
//                         boys and girls from the backward sections of the society
//                         may also avail the opportunities to avail higher
//                         education.
//                       </p>
//                       <p>
//                         It is worth mentioning that publication of this is the
//                         first step in the direction of providing adequate
//                         information on different career options and courses and
//                         this will become instrumental for thousands of
//                         volunteers and teachers, in setting up Career Counselling
//                         Centres in their respective areas to guide the students
//                         throughout the state.
//                       </p>
//                       <p>
//                         It would never have been possible to complete the
//                         publishing of this book without the inspiring support of
//                         our Honourable Chief Minister and the dedicated efforts
//                         of Mr. Mriganka Biswas, our Managing Director, the
//                         General Managers, Shri Sudipta Porel, Mrs. Taneeya
//                         Parveen and the office staff of WBMDFC.
//                       </p>
//                     </>
//                   )}

//                   {openDesk === "ceo" && (
//                     <>
//                       <header className="mb-3">
//                         <p className="text-uppercase small text-muted mb-1">
//                           From the Managing Director&apos;s Desk
//                         </p>
//                         <h2 id="ceo-message-title" className="h5 mb-0">
//                           Shakil Ahmed, IAS – Managing Director, WBMDFC
//                         </h2>
//                       </header>

//                       <p>
//                         The West Bengal Minorities’ Development and Finance
//                         Corporation (WBMDFC), a statutory Corporation of Govt.
//                         of West Bengal takes up various schemes for Economic
//                         Welfare, Scholarships, Education loan, mass awareness
//                         for persons belonging to the notified minority
//                         communities i.e, Buddhist, Christian, Jain, Muslim,
//                         Parsees and Sikh for their economic upliftment. WBMDFC
//                         also organizes Career counselling programmes to help
//                         students choose a field that is in tune with their
//                         skills and their job expectations. Thus, with the help
//                         of career counselling, most candidates end up choosing
//                         the right career, and perform their level best, which
//                         ultimately helps them succeed and upgrade their skills.
//                       </p>
//                       <p>
//                         Careers are now increasingly seen not as being
//                         &apos;chosen&apos; but as being constructed through the
//                         series of choices about learning and work that people
//                         make throughout their lives. Career also plays a vital
//                         role in everybody’s life because social and economic
//                         profile for the major part of one’s life depends upon
//                         the career. It is very difficult for a student, ordinary
//                         or meritorious, to make decisions when presented with
//                         two or more options about career. Making the right
//                         career choice is not an easy task for a student of
//                         today.
//                       </p>
//                       <p>
//                         With a view to providing adequate and updated
//                         information on various institutions offering various
//                         kinds of courses as well as guidance for the students of
//                         this state, West Bengal Minorities’ Development and
//                         Finance Corporation has published this much-desired
//                         Handbook entitled, &quot;A Comprehensive Guidebook to
//                         Various Courses and Career options&quot; so that this
//                         guide book will help boys and girls from the Minority
//                         community to a great extent to avail the opportunities
//                         to find a right career/choice in every sphere of
//                         education. Accordingly they may opt for pursuing higher
//                         education, technical education and vocational courses.
//                       </p>
//                       <p>
//                         I hope that this book will become instrumental as well
//                         for thousands of volunteers and teachers, in providing
//                         Career Counselling to guide the students in their
//                         respective areas how to choose a right career.
//                       </p>
//                       <p>
//                         It would never have been possible to complete the
//                         publishing of this book without inspiring support and
//                         encouragement from Dr. P. B. Salim, IAS, Chairman,
//                         WBMDFC and the dedicated effort of the General Managers,
//                         Sudipta Porel, Ms. Taneeya Parveen and the office staff
//                         of WBMDFC.
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function DesksSection({ leaders = [] }) {
  const [openDesk, setOpenDesk] = useState(null); // store leader.id

  const getPreview = (html) => {
    if (!html) return "";

    const div = document.createElement("div");
    div.innerHTML = html;

    const text = div.textContent || div.innerText || "";

    return text.length > 580 ? text.substring(0, 580) + "..." : text;
  };


  return (
    <>
      <section className="py-5 desks-section mb-lg-5">
        <div className="container">
          <div className="row g-4">

            {leaders.map((item, index) => (
              <motion.div
                className="col-md-6"
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className={`desk-card bg-light ${index === 1 ? "ceo" : ""}`}>

                  <div className="dhw mb-3">
                    <div className="image-wrap shadow-lg">
                      <img
                        src={item.image ? `/storage/${item.image}` : "/images/default.png"}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>

                    <div className="d-flex flex-column">
                      <h4 className="fw-medium text-white fs-5 mb-2">
                        {item.name} <span className="dhwp">{item.post}</span>
                      </h4>
                      <p className="fw-medium text-muted mt-2">
                        {item.designation}
                      </p>
                    </div>
                  </div>

                  {/* Preview (short HTML) */}
                 <p>{getPreview(item.about)}</p>

                  <button
                    type="button"
                    className="btn btn-link btn-sm small fw-normal p-0 mt-1"
                    onClick={() => setOpenDesk(item.id)}
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {openDesk && (
          <motion.div
            className="auth-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenDesk(null)}
          >
            <motion.div
              className="desk-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
            >
              <div className="desk-modal-inner card shadow-lg border-0">
                <button
                  className="auth-close-btn"
                  onClick={() => setOpenDesk(null)}
                >
                  <X size={18} />
                </button>

                <div className="card-body p-3 p-sm-4">

                  {leaders
                    .filter((item) => item.id === openDesk)
                    .map((item) => (
                      <div key={item.id}>
                        <header className="mb-3">
                          <p className="text-uppercase small text-muted mb-1">
                            From the Desk
                          </p>
                          <h2 className="h5 mb-0">
                            {item.name} – {item.designation}
                          </h2>
                        </header>

                       <div
                          dangerouslySetInnerHTML={{
                            __html: item.about
                          }}
                        />
                      </div>
                    ))}

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

