const student = "Богданова Виктория Алексеевна"; //К сожалению, не смогла разобраться с заданием, часть кода была позаимствована >_< by ColinsBlares
document.getElementById("student").innerHTML = student;

let peoples = [
{name:'Пономарев Андрей Алексеевич', gender: 'man', birthdate: '11.12.1980'},
{name: 'Рыбакова Алина Семёновна', gender: 'woman', birthdate: '16.04.1974'},
{name: 'Молчанов Даниил Ильич', gender: 'man', birthdate: '21.03.1984'},
{name: 'Смирнова София Львовна', gender: 'woman', birthdate: '02.01.1987'},
{name: 'Владимиров Артём Григорьевич', gender: 'man', birthdate: '07.12.1990'},
{name: 'Маслова Елизавета Егоровна', gender: 'woman', birthdate: '10.10.1997'},
{name: 'Назарова Вера Романовна', gender: 'woman', birthdate: '01.05.1983'},
{name: 'Иванов Иван Фёдорович', gender: 'man', birthdate: '05.05.1999'},
{name: 'Дмитриев Алексей Григорьевич', gender: 'man', birthdate: '12.11.1998'},
{name: 'Овчинников Платон Александрович', gender: 'man', birthdate: '26.05.1999'},
{name: 'Мартынова Софья Тимуровна', gender: 'woman', birthdate: '07.06.1995'},
{name: 'Соколов Михаил Адамович', gender: 'man', birthdate: '11.03.1979'}
]
function years(birthdate) {
  now = new Date();

    this_year = new Date(birthdate);
    this_year.setFullYear(now.getFullYear());

    birthdate = new Date(birthdate);
    birthdate.setMonth(birthdate.getMonth()-1);

    age_diff = new Date(now - birthdate);
    age = Math.abs(age_diff.getFullYear() - 1970);
        if ((now - this_year) < 0) {
        age = age - 1;
    } 
    return age
  } 
const totalPeoples = peoples.length;
console.log(`Всего гостей : ${totalPeoples}`);

const man = peoples.filter(people => people.gender == 'man').length;
console.log(`Мужчин : ${man}`);  

const woman  = (totalPeoples - man);
console.log(`Женщин : ${woman}`);

for (let user_index in peoples) {
    user = peoples[user_index]
   
    name_short = user.name.split(' ')
    name_short = `${name_short[0]} ${name_short[1].substr(0,1)}. ${name_short[2].substr(0,1)}.`
   
    gender = (user.gender == 'man' && 'М') || 'Ж'
    
    birth = user.birthdate.split('.')
    age = years(new Date(birth[2], birth[1], birth[0]))

    let finish = (`${name_short}, ${gender}, Возраст: ${age}`);
    console.log(finish);
}