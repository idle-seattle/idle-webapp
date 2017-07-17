export const activityData = {
  "seattle-coderdojo": {
    title: "Seattle CoderDojo",
    neighborhood: "South Lake Union",
    grade: "All Ages and Grades",
    category: "Computer Programming",
    description: `<p>Seattle CoderDojo is a free computer programming club for children 8-18. We are supported by sponsors and run by volunteers.</p>`,
    website: 'http://www.seattlecoderdojo.com/',
    address1: '535 Terry Ave. N.',
    city: 'Seattle',
    state: 'WA',
    zip: 98109,
  },
  "microsoft-youthspark": {
    title: "Microsoft YouthSpark Program",
    neighborhood: "University Village",
    grade: "All Ages and Grades",
    category: "Computer Programming",
    description: `<p>Would you like to run a YouthSpark Camp at your nonprofit organization? Download our YouthSpark Camp content including the leader guide, PowerPoint, participant handbook and certificate and start teaching coding camps today.</p>`,
    website: 'https://www.microsoft.com/about/philanthropies/youthspark/youthsparkhub/programs/studentprograms',
    address1: '2624 NE University Village Street',
    city: 'Seattle',
    state: 'WA',
    zip: 98105,
  },
  "after-school-robotics-program": {
    title: "After-School Robotics Program",
    neighborhood: "South Seattle",
    grade: "4th–12th Grade",
    category: "Robotics",
    description: `<p>African Community Services (EACS) has partnered with Filipino Community of Seattle (FCS) to offer a STEM Enrichment Program for 4th -12 grade students in the South Seattle area, starting with Robotics. This 12-week program run on Fridays from 4:30PM to 6:00PM is split between two sessions. The first, Building Robots is hosted at FCS. Building Robotics focuses on the design, construction, operation, and application of robots as well as integrating computer systems for their control and information processing. The second session, Computers 101 is hosted at EACS. Computers 101 teaches youth programming and coding basics, and also provides the opportunity to learn how to build refurbished computers. The Robotics Program provides a space for under privileged youth to explore imagination, technology, and teamwork.</p>`,
    website: 'http://www.eastafricancs.org/?page_id=3091',
  }
}

export const activitySlugs = []
Object.keys(activityData).map((item) => activitySlugs.push(item))

export default activityData
