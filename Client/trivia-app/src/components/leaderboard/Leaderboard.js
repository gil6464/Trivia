const mockArray = [
	{
		name: "Gil",
		score: 6531,
		id: "1",
	},
	{
		name: "Maor",
		score: 2121,
		id: "2",
	},
	{
		name: "Amit",
		score: 6314,
		id: "5",
	},
	{
		name: "Niv",
		score: 1030,
		id: "4",
	},
];

function Leaderboard() {
	return (
		<div id="Leaderboard">
			<h1 id="Leaderboard-Header">Leaderboard:</h1>
			<ul>{getScore()}</ul>
		</div>
	);
}

const getScore = () => {
	let scoresArray = mockArray.map((score) => (
		<li key={getNewKey()}>
			{score.name} has scored {score.score} and is ID is {score.id}
		</li>
	));
	return scoresArray;
};

//Each LI element in react must have a key with a unique id, if not an error will occur
const getNewKey = () => {
	return 1000000 + Math.floor(Math.random() * 9000000);
};

export default Leaderboard;
