import{
    popularIcon,
    topIcon,
    upComing,
    close,
    menu,
    github,
    linkedin
}from '../../assets/index'

export const navBarData = [
  {
    id: 1,
    navTitle: 'Popular',
    apiReference:'Popular',
    icon: popularIcon,
  },
  {
    id: 2,
    navTitle: 'Top',
    apiReference:'top_rated',
    icon: topIcon,
  },
  {
    id: 1,
    navTitle: 'UpComing',
    apiReference:'upcoming',
    icon: upComing,
  },

]

export const footerLinks =[
  {
      id:1,
      text:'Github',
      link:'https://github.com/LoopySantos27',
      icon:github
    },
    {
      id:2,
      text: 'Linkedin',
      link: 'https://www.linkedin.com/in/gerardo-daniel-santos-cuevas-16382a1b8',
      icon:linkedin
    }
]