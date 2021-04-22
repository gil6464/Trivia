# Trivia

CREATE TABLE testing
select country,rentIndex,costOfLivingPlusrentIndex,continent,capital,region,coastline, age0To14,crimeIndex,phones,GDP,costOfLivingIndex
from costoflivings cost left join countries capitals
using(country)
left join countriesgenerals
using(country)
left join countryagestructures
using(country)
left join countrycrimeindex
using(country)
group by country;

CREATE TABLE testing2
select country,populationDensity,qualityOfLifeIndex,population,area
from countrypopulationdensities
left join countrypropertiespriceindices
using(country)
left join qualityoflifeindexbycountries
using(country)
group by country;

create table mainTable as
select \*
from testing left join testing2
using(country)
group by country
