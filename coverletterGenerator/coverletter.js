window.onload=()=>{
  companyName="";
  companyName=companyName?companyName:"贵公司";
  date="6月6日";
  website="flamingotechs.ca";
  position="Web工程师";
  duty="前端开发调试，设计产品需求，优化网站和代码对接";
  skills="PHP, MySQL";

  descriptions=`
  我在18年初的时候用在公司参与过基于python的django开发的项目。其中用到了MySQL，所以有所了解。虽然后来转入了用python写爬虫的工作，但是MySQL的基础知识还是存在的。
  关于PHP，我在大学有一门课程是专门教PHP的。后来我自己也去学习了PHP比较火的LARAVEL框架。有一个小网页是用PHP写的(https://github.com/TianyiTimothy/AnimalsShelterFinder)。
  各种前后端技术也都有所涉猎，学的比较杂，也让我对网页设计和开发有了比较深刻的了解。对于SEO我没有做过相关的工作，但是SEO的概念以及基本做法是有了解的。
  `;

  let cl = `尊敬的先生/女士，

  我叫张天羿，我很高兴在`+date+`的`+website+`得悉`+companyName+`有意招聘`+position+`一职，我认为自己的学习和技能使我非常适合担任这个职位故以此邮件应征。
  
  我目前在Humber College攻读Web开发专业。我的大学本科是国内沈阳化工大学读的计算机科学与技术，因此我有着良好的基础，对于计算机方面的新知识学习起来也很快。也因此我喜欢学习新技术。
  我的工作技巧是将工作切成小块，并为它们设置时间限制。这样，事情的完成速度比正常情况快得多。
  我的方向是网页开发，在国内也有近两年的前端开发经验。由于`+companyName+`主要的责任是`+duty+`，我认为我是合适的人选。
  
  我在大学里做了很多项目，涉及您需要的所有编程语言和技能：`+skills+`等。可以在我的github项目集(tianyitimothy.github.com)上找到我做的项目，也可以在我的个人portfolio(tianyitimothy.github.io)网页查看个人portfolio。
`+descriptions+`

  我希望在一家成熟的公司工作，在那里我可以与同事们一起发展自己的技能。贵公司的职位描述对我很有吸引力。  
  我希望有机会与您沟通，并在您方便的时候尽早当面或在线讨论我的技能和资格。有关我的更多详细信息，请查看我随附的简历或个人portfolio(tianyitimothy.github.io)。可以通过Zhang@Tianyi.codes或通过(437)341-1863与我联系。或者加我的微信号blablavprr。
  
  谢谢您的考虑，
  祝您今天有一个好心情。
  
  张天羿
  `;

  document.getElementById('cl').innerHTML=cl;
}