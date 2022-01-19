const PublishedCard = ({rp}) => {
  console.log(rp)
//   Deadline: "2022-01-15"
// applicationStatus: false
// calendlyLink: "https://calendly.com/learnbyresearch-ayon/15min"
// commitment: "2 hours a day"
// createdAt: "2021-12-20T06:53:45.462Z"
// description: "<p>Due to overpopulation and uprising advanced technology, energy consumption has been drastically increased. Though clean energy technologies have been utilized to satisfy the demand for energy, still oil reservoirs play a vital role in it. Currently, oil reservoirs are not fully explored due to less understanding of reservoir behaviour. In this research, we try to understand the pattern of the fluid flow through a microfluidic model. The microfluidic model helps us to mimic the reservoir porous pattern on the glass substrate. We use artificial intelligence techniques like computer vision and image analysis to understand and trace the fluid flow. This work will be the foundation to solve a lot of puzzles regarding reservoir behaviour.</p><p><br>&nbsp;</p>"
// duration: "3-4 months"
// imageUrl: "http://res.cloudinary.com/dn3oddkar/image/upload/v1639983224/lzbcsvunpy9upzwibwxs.jpg"
// isCompleted: false
// isSponsered: false
// mentors: ['61c0259d9a59756af1856e4d']
// objective: "<p>The main objective of this work is to trace the fluid flow pattern and understand its flow behaviour under various conditions using a microfluidic glass model.</p>"
// outcomes: "<p>We anticipate publishing at least one or two papers in SCI level journals. This research can be extended to future studies in future</p>"
// positions: (2) [{…}, {…}]
// slug: "Understanding_flow_behavior_of_fluid_on_the_porous_media_using_AI"
// title: "Understanding flow behavior of fluid on the porous media using AI"
// updatedAt: "2022-01-18T13:26:05.897Z"
// __v: 0
// _id: "61c028799a59756af1856e81"
// mentors: Array(1)
// 0:
// bio: ""
// education: "<p>MTech in Robotics and Automation,<br>BTech in Electrical and Electronics Engineering</p>"
// email: "srichitra@learnbyresearch.com"
// googleScholarLink: "https://scholar.google.com/citations?hl=en&user=Tun1Q6AAAAAJ"
// imageUrl: "http://res.cloudinary.com/dn3oddkar/image/upload/v1625144137/aem5drn2kswanerf00ah.jpg"
// linkedin: "https://www.linkedin.com/in/srichitra-s"
// name: "Srichitra S"
// organisation: "<p>LearnByResearch</p>"
// phone: "9447473514"
// position: "<p>Lead Researcher (AI and Robotics)</p>"
// researchGateLink: "undefined"
  return (
    <div className="cardholder2">
      <div className="openprogramcard">
        <img
          src={rp.imageUrl}
          alt="Card Haeder"
          className="openprogramcard-img"
        />
        {/* <div className="publishedcard-row">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt=""
            className="publishedcard-user"
          />
          <div className="publishedcard-col">
            <p className="publishedcard-col-usertxt">Full Name user</p>
            <p className="publishedcard-col-subtxt">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div> */}
        <div className="openprogramcard-txetholder">
          <p className="openprogramcard-head">{rp.title}</p>
          {/* <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi
            soluta officia, quasi facere id nihil dolore consectetur aliquid
            reprehenderit eius, aperiam, porro explicabo illum in quisquam totam
            eligendi consequatur!
          </div> */}
        </div>
        <button onClick={()=>{window.location=rp.publishedLink}} className="openprogramcard-btn publishCard-btn">
          View Publication
        </button>{" "}
        {/* <button className="openprogramcard-btn publishCard-btn">
          KNOW MORE
        </button> */}
      </div>
    </div>
  );
};
export default PublishedCard;
