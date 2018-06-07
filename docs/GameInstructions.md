# PM Game Instructions
<br>
N. Oraiopoulos, J. Schlapp, N. Taneri and O. Tuncel
<br>
>You will participate in a **decision-making experiment**. If you follow the instructions carefully and make good decisions, you will get higher rewards. Your performance will be evaluated based on your own decisions.
<br>
<br>
You will get 5 SGD just for showing up on time and playing the game through to the end. The rest of your reward depends on your performance in the game. You can make up to 25 SGD. In the game, Francs (f) is going to be used as the game currency and later >your total payoff in Francs is going to be converted to SGD.
<br>
<br>

##  The Game Scenario

You are involved in the management of a project in a firm that employs **two project managers (PMs)**. The game will be played over **multiple periods** and each PM will run a **new and different R&D project** at each period. Each period will consist of a product evaluation stage and a resource allocation stage. There are **three players in each period of a game:**
* an automated Firm
* two project managers from the computer lab (PM1 and PM2).

You are PM1 and your goal is to maximize your payoff as a project manager. The Firm is automated and will act in its own best interest, but will be influenced by your decisions. At each period, you will be matched with a different randomly selected PM2 within the computer lab.
<br>
<br>
The timeline of the game is as follows and is also depicted in Figure 1:

  * The Firm announces the compensation scheme to the PMs.
  * PMs individually decide to exert high or low effort.  PMs incur a private cost of effort if they exert high effort and no cost if they exert low effort.
  * Each PM privately receives a signal about the market potential of its product. This signal may or may not be correct. If PMs exert high effort, their signals will have a higher probability of being correct. If PMs exert low effort, they will not receive any signal.
  * Each PM will make a recommendation to the firm about its product’s market potential. This recommendation may or may not be the same as the signal received by the PM.
  * After receiving recommendations from the PMs, the Firm makes a resource allocation decision across two products. The firm can either invest all its resources into a single product, or divide the resources equally across the two products.
  * Lastly, the actual market potentials for the products will be realized. The Firm will receive its payoff and compensate the PMs according to the offered compensation scheme.

![Figure 1: Sequence of events](/docs/images/Figure1_SequenceOfEvents_GameInstructions.png)

Figure 1: Sequence of events

## The Compensation Scheme

Each PM’s (including your) payoff in each period will be calculated as the sum of:
	 a fixed wage,
	* an effort cost,
	* a share from the market value of his/her (your) own product and
	* a smaller share from the market value of the other PM’s product.
After explaining the product evaluation and the resource allocation stages, the exact calculation of the PM’s compensation will be shown.

## Product Evaluation Stage

Each product can have either good or bad market potential, which cannot be known surely until the end of the project. Without any further information, a good and bad market potential product are equally likely.

However, after each PM decides on his/her effort level, (s)he may receive a signal about whether the market potential of his product is good or bad. On the one hand, if the PM exerts low effort, the PM will not receive any signal. On the other hand, if the PM exerts high effort, in which case (s)he will incur a cost 5 f (Cost of High Effort), the signal will be equal to the real market potential with 89% probability (Signal Quality).

Alternatively stated, whenever the chosen effort level is high, a good signal indicates that the probability of a good product is equal to 89% (likewise, a bad signal indicates that the probability of a bad product is equal to 89%).


After receiving the signal privately, each PM will make a recommendation to the firm. PM might give a recommendation equal to the signal (s)he received, or (s)he might recommend the opposite depending on his/her preference on how the resources should be allocated. Neither the firm nor the other PM will observe the effort level or the signal received by a PM. Only the recommendations will be shared with other players.
Resource Allocation Stage

After the PMs make their recommendations, the firm will decide on whether to allocate all of its resources to a single product or divide them evenly between product 1 and 2 depending on the recommendations.
* The firm will invest all resources into product 1 if the recommendations are “Good” from PM1 and “Bad” from PM2.
* The firm will divide resources equally if the recommendations are “Good” from both PMs or “Bad” from both PMs.
* The firm will invest all resources into product 2 if the recommendations are “Bad” from PM1 and “Good” from PM2.

After the firm invests its resources, the market potential of the products that the firm invested in are announced. The market values of product 1 (PM 1’s product) and product 2 (PM2’s product) are denoted by v1 and v2 respectively. These values depend on both each product’s real market potential as well as the amount of resources invested in the product. More specifically:
* If the firm does not invest in a product, the market potential of the product will not be known, and the value will effectively be zero.
* If a product’s market potential is “Bad”, its value will be zero regardless of how much resources are invested in it.
* If a product’s market potential is “Good”, its value will depend on the amount of resources invested in it as indicated in the table below:

No Resources | Resources Divided | All Resources
-------------|-------------------|--------------
0 f	| 700 f	| 1145 f

Table: A Good product’s market value with different levels of resource investment

## The Compensation Calculation

Per period, each PM has a fixed wage of 5 f (Fixed Wage). Moreover, if a PM exerts high effort, (s)he will incur the Cost of High Effort, 5 f. Additionally, each PM gets a share from the market value of his/her own product, which is 4.5% (Individual Incentive). He/she also gets a share from the market value of the other project manager’s product, which is 1.2% (Shared Incentive). Hence, the total payoff of each PM in a given period is calculated as:

<table>
  <tr>
    <td></td>
    <td>High Effort</td>
    <td>Low Effort</td>
  </tr>
  <tr>
    <td>PM1</td>
    <td>5+v_1×4.5%+v_2×1.2%-5</td>
    <td>5+v_1×4.5%+v_2×1.2%</td>
  </tr>
  <tr>
    <td>PM2</td>
    <td>5+v_2×4.5%+v_1×1.2%-5</td>
    <td>5+v_2×4.5%+v_1×1.2%</td>
  </tr>  
</table>

Table: PM Utility Calculation

## Your task
As the PM, your task in each period is to:
  * make predictions about the other PM on their:
    * effort level (High or Low) and
    * recommendation accuracy (% of the recommendation being same with the signal when the signal is good and when the signal is bad)
  * choose your effort level (High or Low) which determines whether you receive a high-quality signal (with 89% accuracy) or no signal,
  * choose your recommendation (Good or Bad) that you want to give to the firm after observing your expected payoffs in both cases.

##  History Tables
After the first period, you will have two history tables. It will show your history data on the left table and the history data for the other PM you are matched with in the current period on the right table from previous periods. The information in these tables, when available, will include:

* The recommendation of the PM,
* The resource allocation decision of the Firm, and
* The market potential of the PM’s product.

## Warm-Up Periods
The game will start with warm-up periods for you to understand the game and how to use the software. As stated before, your performance will be used to determine your prize. However, the first few periods of the game will not be used in your performance evaluation. The game will have 3 warm-up periods. When you are finished with the warm-up periods, your performance will be recorded and will be used to determine your money prize.


## Survey
In the Survey Part of the experiment, you will be asked 13 questions in individual screens. In each question, you will be asked to choose between two options, labeled A and B.

## Questions

Option A is always a certain payoff and option B is always a gamble. Option B will be displayed as a pie chart with areas of the pie chart corresponding to the probabilities of the payoffs. Below is shown an example:
		        	        Option A	          	            		Option B           			

Under Option A, the gain is certain and $566. Under Option B, there is 50% probability of gaining $1000 and 50% probability of getting $0.

## Actions
After choosing Option A or Option B of a question, you will press Confirm button to continue to next question. If you make a mistake in one of the first five questions, you can click the box on the bottom left corner of the screen labeled Start Over to start this part over. This box will disappear once you proceed beyond the fifth
question.

## Performance Evaluation and Your Prize
After you finish the warm-up periods, your total payoff will be recorded for performance evaluation. You will play the game for an unknown number of periods. The game’s currency is Francs (f). After each period, that period’s payoff will be added to your Total Payoff value. At the end of the game, your total payoff value will be converted to SGD at the rate of 37.5 Francs per dollar. You will also earn up to 2 SGD from the survey. Your total reward will be calculated as the summation of your reward from the game, and from the survey and your on-time participation fee of 5 SGD. After you answer the questions appearing on your screen, your prize will appear. Please do not close your game window. You will need to show your reward to investigators before writing it down on the payment form.
