import subImage1 from "./assets/sub_image1.jpg";
import subImage2 from "./assets/sub_image2.jpg";
import subImage3 from "./assets/sub_image3.jpg";
import subImage4 from "./assets/sub_image4.jpg";

interface headerDataItems {
  lifeAtTechM: any,
  getStarted: any
}

export const headerDataItems = {
  lifeAtTechM: {
    header: "Life at TechM",
    ul: ["Why TechM", "The TechM Way", "Diversity and Inclusion"],
    img: [subImage1,subImage2]
  },
  getStarted: {
    header: "Get Started",
    ul: ["Register", "Sign In", "IT Opportunities", "BP Opportunities"],
    img: [subImage3,subImage4]
  }
}