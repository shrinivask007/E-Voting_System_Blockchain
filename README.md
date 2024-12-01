## E-Voting System Based on Blockchain
A blockchain-based voting system that preserves voter privacy and increases accessibility, while keeping the voting system transparent, secure, and cost-effective. The system implements a voting framework that utilizes ethereum’s blockchain and smart contracts to achieve voter administration and auditable voting records. The implementation was deployed on ethereum’s test network to demonstrate usability, scalability, and efficiency.

![Screenshot 1](Screenshots/screenshot1.png) ![Screenshot 2](Screenshots/screenshot2.png)![Screenshot 3](Screenshots/screenshot3.png) ![Screenshot 4](Screenshots/screenshot4.png)![Screenshot 5](Screenshots/screenshot5.png) ![Screenshot 6](Screenshots/screenshot6.png)![Screenshot 7](Screenshots/Screenshot7.png)![Screenshot 8](Screenshots/screenshot8.png)
![Screenshot 9](Screenshots/screenshot9.png)



Pre requisites:
1. Node JS
2. Ganache Gui
3. Metamask extension in the browser, preferably chrome.

## SET UP INSTRUCTIONS

Open ganache and select quick start ethereum.

Open your browser and configure metamask. Create a wallet and store your```Secret Recovery Phrase``` in a safe place.

#### Connecting metamask and ganache
1. In metamask, go to settings > networks > add network. You can also get to this by clicking the metamask extension pinned on your browser > clicking the profile picture > settings > networks > add network
2. Give your network any name of choice. 
3. For New RPC URL go to ganache where you'll copy the RPC server url and paste in Metamask. 
4. Chain ID for ganache is 1337. 
5. You can name currency symbol as "ETH" and save. 

#### Importing an account from ganache to metamask
1. Open ganache and select show keys on any account. The show keys button is the key icon.( Index-0 accound will be of admin by default i.e of 99.90 ETH)
2. Copy the private key and click done.
3. Open the metamask menu which can be accessed by clicking the profile picture and select import account.
4. Paste the private key copied from ganache and click import.


### Install these additional packages just in case to avoid errors:

- Web3.js: ```npm i web3```
- Solidity (solc-js): ```npm i solc```
- Trufflejs: ```npm install -g truffle```

#### Cloning the project

```git clone https://github.com/shrinivask007/E-Voting_System_Blockchain```

```cd E-Voting_System_Blockchain```

- Frontend

```cd client```

```npm i```

```npm start```

- open another terminal for Backend

```cd server```

```npm i```

```npm start```

- open another terminal

```truffle compile```

```truffle migrate```or ( ```truffle migrate --reset``` for subsequent runs)



The project will open in the browser and metamask will ask you to select an account. Select the account we had imported earlier.

