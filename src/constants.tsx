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

export const studyLevelConstants = [
  {
    value: "1st Year, 1st Sem",
    label: "1st Year, 1st Sem"
  },
  {
    value: "1st Year, 2nd Sem",
    label: "1st Year, 2nd Sem"
  },
  {
    value: "2nd Year, 1st Sem",
    label: "2nd Year, 1st Sem"
  },
  {
    value: "2nd Year, 2nd Sem",
    label: "2nd Year, 2nd Sem"
  },
  {
    value: "3rd Year, 1st Sem",
    label: "3rd Year, 1st Sem"
  },
  {
    value: "3rd Year, 2nd Sem",
    label: "3rd Year, 2nd Sem"
  },
  {
    value: "4th Year, 1st Sem",
    label: "4th Year, 1st Sem"
  },
  {
    value: "4th Year, 2nd Sem",
    label: "4th Year, 2nd Sem"
  },
]