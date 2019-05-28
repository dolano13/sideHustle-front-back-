const mongoose = require("mongoose");
const SideHustle = require("../models/HustleAfter5");

const dbName = "SideHustle";
mongoose.connect(
  `mongodb+srv://dolano13:36938614@cluster0-qegeg.mongodb.net/test?retryWrites=true'${dbName}`
);

const ideas = [
  {
    ideas: "Start a blog",
    desc:
      " Okay, so you won't make money that fast with a blog. But, if you start a blog and deliver enormous amounts of value, you could set yourself up with a platform for ending a tremendous amount of passive income. This is something you can easily build on the side with just a few hours of work per week, but you need to stay consistent and post great content regularly.",
    url: "https://www.entrepreneur.com/article/275239"
  },
  {
    ideas: "Create an online course",
    desc:
      "Create an online course with a platform like Udemy or Teachable and leverage some of your skills to create a healthy income. Depending upon how much time you invest in your course, you could make a substantial side revenue stream by creating courses that deliver tremendous amounts of value.",
    url: "https://www.entrepreneur.com/article/249613"
  },
  {
    ideas: "College Application/Financial Aid Planning Consulting Business",
    desc:
      "A financial aid planner helps parents get the lowest possible price for their child's college education, thus saving them money. Tapping into financial aid resources is not just about being smart. It is about being aware of the resources that are available. This business involves advising parents and high school students on selecting a college, filling out the application and financial aid forms, providing tips for writing the college essay, advising parents about tax implications on college savings plans, and negotiating the best possible financial aid package when a college offer is received. A sound knowledge about higher education institutions and a thorough understanding of financial aid options are important. Market your services in high schools, libraries, private tutorial centers and universities. TIP: Have a good understanding of different financial programs like Byrd Scholarships, Stafford Loans, private and federal grants, and PLUS Loans. Also be current with college savings plans including 529 plans, Coverdell Education Savings Accounts, the Uniform Gift to Minors Act, and Charitable Remainder Unitrusts.",
    url:
      "https://www.amazon.com/Start-College-Planning-Consultant-Business/dp/1599185067/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=8b4dd2669297c406ba2a3006902c556c"
  },
  {
    ideas: "Consignment Shop",
    desc:
      "Talking about wearing 'pre-owned' clothing has never been a popular coffee table discussion. Times may be changing, though. Recycled clothes are back. The recession has led consumers to save their bucks by buying 'gently used' items. Consignment items also work will as an online business. As a consignment shop owner, you don't pay anything for your inventory until it is sold, which makes this business ideal for the startup entrepreneur. Take clean, well-cared-for items and display and merchandise them online or at a physical location for the owners, splitting the profits when you make a sale. Many times, the profit split is either 50/50 or 60/40, with the higher percentage going to the consignment shops.TIP: The key to a successful consignment shop is a pleasant atmosphere. Make it clean, fresh and fashionable.",
    url:
      "https://www.amazon.com/Start-Your-Clothing-Store-More/dp/1599183951/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=7bf42cf6e4c078e122fddf63fb1a0331"
  },
  {
    ideas: "Consignment Shop",
    desc:
      "Freelance writers can write articles on any topic, from horse training to buying an RV. A good way to start is by writing about subjects in which you are already an expert. The Writer's Market lists guidelines for thousands of publications.Ghost writing is a good pursuit for freelancers looking for money and willing to forgo a byline. Websites are always on the lookout for quality freelancers, too. Create a website to promote your freelance writing business.vTIP: Your initial queries are likely to get rejected many times. Cultivate a stoic resilience to rejection.",
    url:
      "https://www.amazon.com/Start-Your-Freelance-Writing-Business/dp/1599181754/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=fb8396827103a56cfdac3624a5a9588a"
  },
  {
    ideas: "Gift Basket Making Business",
    desc:
      "From corporate parties to baby showers, holidays and birthdays, gift baskets can be tailored to suit the taste of anyone. Gift basket entrepreneurs need a flair for the creative and the design ability to buy gifts and tuck them into baskets, decorative tins, boxes or bags. Attractive packaging is an important part of the gift basket business. You can't just throw some objects together and stick on a bow. Market your gift baskets by taking photos of them. Prepare a brochure listing the contents of each basket and its price. You can sell your baskets online, to corporate offices, through mail order and in local shops. TIP: There is a large, untapped market for merchandise with university and sports team logos on them. You will first need to get approval from the university's licensing department to make gift baskets that have merchandise with their logo.",
    url:
      "https://www.amazon.com/Start-Your-Gift-Basket-Business-ebook/dp/B004RUH4LC/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=dbce1b627f73f30cd696828af206c4b0"
  },
  {
    ideas: "Graphic Design",
    desc:
      "Duties of a graphic designer include designing flyers, informational pamphlets, product catalogs and advertisements. Graphic designers also consult with printers or publishers to identify the best choice of paper, cover stocks and printing processes for any given assignment.Market your services to ad agencies, publishing companies, small magazines, corporations, product manufacturers and individual entrepreneurs.TIP: Good listening skills are essential to running a successful graphic designing business. You need to understand completely what your clients want.",
    url:
      "https://www.amazon.com/Start-Graphic-Design-Business-Step/dp/1599181630/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=8b81bbc39c72dd9e6a937cdfbfacf9c0"
  },
  {
    ideas: "Grant Writer",
    desc:
      "The grant writer is the vital link between a funder and a grant seeker. Grant writers work as independent contractors, full- or part-time development officers, and freelancers. Nonprofit organizations account for the largest percentage of grant seekers.Grant writers can apply for a myriad of categories of funding, including project grants, general operating grants, endowment grants, restricted grants, startup funding, matching grants, and challenge grants. TIP: Some websites that will help you start researching funders are www.fdncenter.org, www.tgci.com and www.fundsnetservices.com.",
    url:
      "https://www.amazon.com/Grant-Writing-Business-Step---Step-Startup-ebook/dp/B00C0JJ0NC/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=52cea47ec4739dc60b52a04ad55cf734"
  },
  {
    ideas: "Mobile Spa",
    desc:
      "Bring the spa experience to your clients via a mobile day spa. Mobile spa treatments can be offered in homes, offices or hotels. A mobile spa offers facials, massages, bridal hair and makeup, body treatments, manicures and pedicures. Mobile spas have low startup costs. There are no ongoing costs like those involved in operating a storefront operation such as rent, utilities, maintenance and insurance. Massage therapists, manicurists and hairdressers can run a successful mobile spa business. Market your business to clients who are working from home and do not have time to go to a spa, older folks who cannot leave their homes, working professionals who want a break during a high-stress period, and clients who are not physically able to get themselves out of the house due to illness.TIP: Carry a mobile retail shop with skin-care products and accessories such as herbal neck wraps, spa slippers and ointments for your clients.",
    url:
      "https://www.amazon.com/Start-Your-Salon-Step-Step/dp/1599185431/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=entaff-20&linkId=ad523254b6e3e2b5457e3cf3cbf56930"
  }
];
SideHustle.create(ideas, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${ideas.length} ideas`);
  mongoose.connection.close();
});
