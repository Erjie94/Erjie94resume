/*響應更改內容*/
const screenWd = window.innerWidth;

window.addEventListener('resize', changeMytitle);

function changeMytitle() {
    const Name = document.getElementById('MyName');

    if (screenWd <= 1023)
    {
        Name.textContent = "Erjie's resume"
        const img = document.getElementById('speaker');
        img.style.width='50%';

    }
    else
    {
        Name.textContent = "Erjie"
        const img = document.getElementById('speaker');
        img.style.width='25%';
    }
}

function simulateLoadDelay() {
    return new Promise(resolve => setTimeout(resolve, 10000)); // 延迟3秒
}
/*按鈕*/
/*
function scrollToTargetTop() {
    const target = document.getElementById('my_resume_top');
    target.scrollIntoView({ behavior: 'smooth' }); 平滑滾動*/

/*載入結束後*/ 
document.addEventListener('DOMContentLoaded',async function(){
    const load = document.getElementById('loading')
    const mewin = document.getElementById('my_resume_top');
    load.style.display = 'none';
    mewin.style.animation = 'opend 1.5s forwards';
    mewin.scrollIntoView({ behavior: 'smooth' });
})

function scrollAbout() {
    const target = document.getElementById('About');
    const animatedBox = document.getElementById('AboutBox');
    target.scrollIntoView({ behavior: 'smooth' });
}

function scrollSkill() {
    const target = document.getElementById('Skill')
    const animatedBox = document.getElementById('SkillBox');
    target.scrollIntoView({ behavior: 'smooth' });
}

function scrollResults() {
    const target = document.getElementById('Results')
    const animatedBox = document.getElementById('ResultsBox');
    target.scrollIntoView({ behavior: 'smooth' });
}

function scrollExperience() {
    const target = document.getElementById('Experience')
    const animatedBox = document.getElementById('ExperienceBox');
    target.scrollIntoView({ behavior: 'smooth' });
}

/*滾輪*/
var AboutBox_be = false;
var SkillBox_be = false;
var ResultsBox_be = false;
var ExperienceBox_be = false;
window.addEventListener('scroll',function()
{
    const Box1 = this.document.getElementById('AboutBox')
    const Box2 = this.document.getElementById('SkillBox')
    const Box3 = this.document.getElementById('ResultsBox')
    const Box4 = this.document.getElementById('ExperienceBox')
    const wordBox1 = this.document.getElementById('About_wordbox')
    const wordBox2 = this.document.getElementById('Skill_wordbox')
    const wordBox3 = this.document.getElementById('Results_wordbox')
    const wordBox4 = this.document.getElementById('Experience_wordbox')
    const button1 = this.document.getElementById('Aboutbutton')
    const button2 = this.document.getElementById('Skillbutton')
    const button3 = this.document.getElementById('Resultsbutton')
    const button4 = this.document.getElementById('Experiencebutton')
    const Box1Top = Box1.getBoundingClientRect().top;
    const Box1bottom = Box1.getBoundingClientRect().bottom;
    const Box2Top = Box2.getBoundingClientRect().top;
    const Box3Top = Box3.getBoundingClientRect().top;
    const Box4Top = Box4.getBoundingClientRect().top;
    const Box4bottom = Box4.getBoundingClientRect().bottom;
/*1*/
    if (Box1Top <= this.window.innerHeight*0.1)
    {
        Box1.style.animation = 'boxZoom 1.5s forwards'; 
        AboutBox_be=true;
        wordBox1.style.animation='wordZoom 1.5s forwards';
        button1.style.fontWeight='bold';
        button1.style.fontSize='2.4rem';

        button2.style.fontWeight='';
        button2.style.fontSize='2rem';
        button3.style.fontWeight='';
        button3.style.fontSize='2rem';
        button4.style.fontWeight='';
        button4.style.fontSize='2rem';
    }
/*2*/
    if (Box2Top <= this.window.innerHeight * 0.8 )
    {
        Box2.style.animation = 'boxZoom 1.5s forwards'; 
        ExperienceBox_be=true;
        wordBox2.style.animation='wordZoom 1.5s forwards';
        button2.style.fontWeight='bold';
        button2.style.fontSize='2.4rem';

        button1.style.fontWeight='';
        button1.style.fontSize='2rem';
        button3.style.fontWeight='';
        button3.style.fontSize='2rem';
        button4.style.fontWeight='';
        button4.style.fontSize='2rem';
    }   
    else if (screenWd >= 1024)
    {
        ExperienceBox_be = false;
        Box2.style.animation = 're_boxZoom 3s forwards';
        wordBox2.style.animation = 're_wordZoom 1.5s forwards';
    }
/*3*/ 
    if (Box3Top <= this.window.innerHeight * 0.8)
    {
        Box3.style.animation = 'boxZoom 1.5s forwards'; 
        SkillBox_be=true;
        wordBox3.style.animation='wordZoom 1.5s forwards';
        button3.style.fontWeight='bold';
        button3.style.fontSize='2.4rem';

        button4.style.fontWeight='';
        button4.style.fontSize='2rem';
        button2.style.fontWeight='';
        button2.style.fontSize='2rem';
        button1.style.fontWeight='';
        button1.style.fontSize='2rem';
    }
    else if (screenWd >= 1024)
    {
        SkillBox_be = false
        Box3.style.animation = 're_boxZoom 3s forwards';
        wordBox3.style.animation = 're_wordZoom 1.5s forwards';
    }
/*4*/
    if (Box4Top <= this.window.innerHeight * 0.8 )
    {
        Box4.style.animation = 'boxZoom 1.5s forwards';
        ResultsBox_be=true;
        wordBox4.style.animation='wordZoom 1.5s forwards';
        button4.style.fontWeight='bold';
        button4.style.fontSize='2.4rem';

        button3.style.fontWeight='';
        button3.style.fontSize='2rem';
        button2.style.fontWeight='';
        button2.style.fontSize='2rem';
        button1.style.fontWeight='';
        button1.style.fontSize='2rem';
    }
    else if (screenWd >= 1024)
    {
        ResultsBox_be = false
        Box4.style.animation = 're_boxZoom 3s forwards';
        wordBox4.style.animation = 're_wordZoom 1.5s forwards';
    }
})

