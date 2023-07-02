import meow from "meow";

export const help = () => {
  const cli = `
	Usage
	  $ forth <options>

	Options
	  --username, -u  Include a username
	  --password, -p  Include a password
    --sex, -s       Include customer sex

	Examples
	  $ forth createAccount -u test@test.com -p 12345
`;
  return console.log(cli);
};
