/* ABL Safety Posters — offline content, part A.
   Grounded in: VPO Safety Pillar self-assessment (Aug 2026) guidance, S.A.F.E. form (SAFE.3.2.03),
   Kinney method (VPO.SAFE.2.02.02), PPE Standard AFR-VPOS.A09.001, GTS.GEN.SFT.GSP.010.
   Kinney values: P {10,6,3,1,0.5,0.1}  F {10,6,3,2,1,0.5}  I {40,15,7,3,1}.
   deck.actions follow the first poster's points; quiz = [question, [A,B,C,D], correctIndex]. */
window.TOPICS_A = [
{
 id:"general", req:"General", name:"General safety", src:"S.A.F.E. form; PPE Standard AFR-VPOS.A09.001",
 posters:[
  {icon:"shield", main:"Safety first - every time, no exceptions", points:["Wear your PPE - hi-vis from the gate","New or unplanned job? Fill the SAFE form first","See a hazard or damaged equipment? Report it"], reminder:"Everyone goes home safe today - look out for each other."},
  {icon:"warning", main:"If it is not safe, stop and ask", points:["Unsure how to do it? Ask first","Something changed? Re-check the risks","Speak up - nobody gets blamed for asking"], reminder:"A few minutes to check is better than a lifetime of regret."}
 ],
 deck:{
  title:"Safety first, every time",
  objectives:["Name the three habits that keep you safe every shift","Recognise when a job needs a SAFE form","Report hazards and damaged equipment the same shift"],
  why:["Most injuries happen on ordinary days doing ordinary jobs","Shortcuts feel faster but turn small problems into serious injuries","One person speaking up can protect the whole team"],
  hazard:["Hi-vis vest left in the locker","A breakdown fixed without a SAFE form","A cracked guard nobody reported","Someone rushing to hit the production target"],
  actions:[["Wear your PPE - hi-vis from the gate","Put your vest on before you pass security and keep it on until you leave site."],["New or unplanned job? Fill the SAFE form first","No SOP, never done it before, or an unplanned breakdown - stop and fill the form."],["See a hazard or damaged equipment? Report it","Tell your team leader the same shift and make the area safe if you can."]],
  do:["Check your PPE before you put it on","Stop and ask when you are unsure","Look out for your colleagues"],
  dont:["Take shortcuts to save time","Walk past a hazard","Assume someone else will report it"],
  kinney:{task:"Fixing a breakdown without a SAFE form", b:[6,3,7], controls:"Stop, fill the SAFE form, isolate with LOTO and agree the safe way with the team before starting.", a:[1,3,7]},
  emergency:["Stop work and make the area safe if you can","Raise the alarm and call the emergency number","Go to the assembly point if told to evacuate","Report what happened to your supervisor"],
  quiz:[["When should you put on your hi-vis vest?",["At your workstation","When the supervisor asks","From the site gate","Only in the warehouse"],2],["Which job needs a SAFE form?",["A routine job with an SOP","An unplanned breakdown","Your normal start-up check","Cleaning your desk"],1],["You see a damaged guard. What do you do?",["Ignore it if the machine runs","Report it the same shift","Fix it with tape","Wait for the audit"],1]],
  discussion:"What is the one shortcut we are most tempted to take, and how do we stop it?"
 }
},
{
 id:"risk", req:"R.1.1.2.1", name:"Risk assessment (Kinney)", src:"VPO.SAFE.2.02.02 Kinney method; self-assessment R.1.1.2.1",
 posters:[
  {icon:"clipboard", main:"Assess the risk before you start", points:["What can hurt you?","How likely is it?","What control will stop it?"], reminder:"A Kinney risk score above 70 means action before work starts."}
 ],
 deck:{
  title:"Assess the risk before you start",
  objectives:["Explain Risk = Probability x Frequency x Impact","Score a task with the Kinney scales","Choose controls that bring the score below 70"],
  why:["You cannot control a hazard you have not spotted","Scoring the risk tells us how urgent the controls are","Our self-assessment shows risk assessment is a gap in most departments"],
  hazard:["Jobs done the same way for years without a review","New equipment started before anyone assessed it","Changes to a process with no update to the risk assessment","Contractors starting work without knowing our risks"],
  actions:[["What can hurt you?","Look at energy, chemicals, heights, moving machines, heat and people around you."],["How likely is it?","Use the Kinney scales for probability and how often people are exposed."],["What control will stop it?","Follow the hierarchy: remove it, engineer it out, then procedures, then PPE."]],
  do:["Look at the job before you start","Use the Kinney scales, not a guess","Update the assessment when something changes"],
  dont:["Rely on PPE alone","Copy an old assessment without checking","Start when the score is above 70 without controls"],
  kinney:{task:"Cleaning a filler with guards open", b:[6,6,7], controls:"LOTO before cleaning, interlocked guards, trained operator, inspected gloves and eye protection.", a:[0.5,6,7]},
  emergency:["Stop the task if the risk is higher than expected","Make the area safe and warn others","Tell your supervisor and agree new controls","Restart only when the risk is controlled"],
  quiz:[["How is Kinney risk calculated?",["P + F + I","P x F x I","P x I only","F x I only"],1],["From which score is action required?",["20","70","200","400"],1],["Which control comes first in the hierarchy?",["PPE","A warning sign","Removing the hazard","Training"],2]],
  discussion:"Which job in our area has never been risk assessed properly?"
 }
},
{
 id:"safe", req:"R.1.1.2.6", name:"SAFE form for non-routine tasks", src:"S.A.F.E. form for non-routine tasks (SAFE.3.2.03)",
 posters:[
  {icon:"clipboard", main:"New or unplanned job? SAFE form first", points:["No SOP or never done it? Stop","Survey the area and assess the risk","Everyone on the job signs the form"], reminder:"Breakdowns and overhauls count as non-routine. Every time, no exceptions."}
 ],
 deck:{
  title:"SAFE form for non-routine jobs",
  objectives:["Recognise the four signs of a non-routine task","Complete each step of the SAFE form","Pick the right permit from the form"],
  why:["Non-routine jobs are where serious injuries happen","Breakdowns create pressure to rush","The form makes the team stop and think together"],
  hazard:["A seized valve on a pressurised line","A conveyor jam during a busy shift","A contractor doing a job for the first time","A yearly overhaul nobody remembers how to do"],
  actions:[["No SOP or never done it? Stop","Non-routine means: no SOP, unfamiliar, unplanned breakdown, or done less than once a year."],["Survey the area and assess the risk","Tick machine and energy, chemicals, fire, heights, tools, environment and lifting hazards."],["Everyone on the job signs the form","Agree the safe way and the permits together, then all sign before starting."]],
  do:["Stop before a non-routine job","Use the form's hazard list","Get the permit the form points to"],
  dont:["Fix a breakdown without the form","Let one person fill it in alone","Start before everyone has signed"],
  kinney:{task:"Freeing a seized valve on a CO2 line", b:[6,2,15], controls:"SAFE form, depressurise and LOTO the line, gas monitoring, work in pairs.", a:[1,2,15]},
  emergency:["Stop the job if a new hazard appears","Make the equipment safe","Review the SAFE form with the team","Get a supervisor before restarting"],
  quiz:[["Which of these is a non-routine task?",["Daily start-up with an SOP","An unplanned breakdown","Your normal cleaning round","Reading a gauge"],1],["What does the S in SAFE stand for?",["Stop","Survey the area","Sign","Safety"],1],["Who signs the SAFE form?",["Only the supervisor","Only the safety team","Everyone doing the job","Nobody"],2]],
  discussion:"Which breakdown last month should have had a SAFE form?"
 }
},
{
 id:"ppe", req:"R.1.1.6.1", name:"PPE", src:"PPE Standard AFR-VPOS.A09.001",
 posters:[
  {icon:"hardhat", main:"Check your PPE before you put it on", points:["Hi-vis vest on from the site gate","Damaged PPE? Report it. Get it replaced.","No rings, watches or scarves near machines"], reminder:"Damaged PPE is worse than none - you think you are protected."},
  {icon:"warning", main:"No jewellery near moving machines", points:["Remove rings, watches and studs","Tie back loose hair, no scarves or ties","Can't remove it? Get approval to cover it"], reminder:"Loose items get caught in rotating machinery in a second."},
  {icon:"shield", main:"Noise zone? Hearing protection on", points:["Zones at 85 dB(A) and above are signed","Keep plugs or muffs on the whole time","Check them before use, replace if damaged"], reminder:"Hearing loss is permanent and you will not feel it happening."}
 ],
 deck:{
  title:"Check your PPE before every shift",
  objectives:["Inspect PPE before putting it on","Report and replace damaged PPE","Follow the jewellery and noise zone rules"],
  why:["Damaged PPE gives false protection","Hi-vis keeps you visible to forklift drivers","Jewellery can drag a hand into a machine"],
  hazard:["A cracked hard hat in the brewhouse","Torn gloves at the dosing point","A faded hi-vis vest in the warehouse","A ring worn on the packaging line"],
  actions:[["Hi-vis vest on from the site gate","Put it on before you pass security and keep it on until you leave."],["Damaged PPE? Report it. Get it replaced.","Tell your team leader; damaged or expired PPE is removed and replaced straight away."],["No rings, watches or scarves near machines","Remove them before entering process areas; covering needs Plant Manager approval."]],
  do:["Inspect PPE before you put it on","Wear the PPE on the area's PPE matrix","Keep PPE clean and stored properly"],
  dont:["Wear cracked or torn PPE","Share personal PPE","Wear jewellery near moving machinery"],
  kinney:{task:"Clearing a jam on the labeller", b:[6,6,7], controls:"LOTO before clearing, no jewellery, cut-resistant gloves inspected before use.", a:[1,6,7]},
  emergency:["Stop the machine with the emergency stop","Raise the alarm and call first aid","Do not move an injured person unless in danger","Report the incident to your supervisor"],
  quiz:[["When must you inspect your PPE?",["Once a month","Before you put it on","Only when it looks dirty","When the auditor visits"],1],["What do you do with damaged PPE?",["Tape it up","Report it and get it replaced","Use it until the shift ends","Give it to a contractor"],1],["At what noise level is a zone signed for hearing protection?",["60 dB(A)","70 dB(A)","85 dB(A)","120 dB(A)"],2]],
  discussion:"What stops us checking our PPE every time, and how do we fix it?"
 }
},
{
 id:"flt", req:"R.1.4.1.8", name:"Forklifts and pedestrians", src:"Self-assessment R.1.4.1.8",
 posters:[
  {icon:"forklift", main:"Keep people and forklifts apart", points:["Walk only on barrier-protected walkways","Area blocked for work? Keep out","Cleaning or sorting only in set areas"], reminder:"Never walk behind or beside a moving forklift."}
 ],
 deck:{
  title:"Keep people and forklifts apart",
  objectives:["Use designated walkways in the warehouse and yard","Explain why areas are blocked during work","Plan cleaning and sorting away from traffic"],
  why:["A forklift and a pedestrian is one of our highest risks","Drivers have blind spots, especially when reversing or carrying loads","Barriers work even when people are tired or distracted"],
  hazard:["Short-cuts across the loading bay","Cleaning in an aisle while trucks move","Sample taking next to a working forklift","Manual loading beside a truck"],
  actions:[["Walk only on barrier-protected walkways","Use the marked, protected walkways even when they are longer."],["Area blocked for work? Keep out","Respect blocked zones; they are closed so people can work without traffic."],["Cleaning or sorting only in set areas","Do this work in dedicated areas or at times with no forklift activity."]],
  do:["Make eye contact with the driver","Wear your hi-vis vest","Report damaged barriers"],
  dont:["Walk behind a reversing forklift","Use your phone while crossing","Move barriers to take a short-cut"],
  kinney:{task:"Sorting pallets in an active aisle", b:[6,6,15], controls:"Block the aisle with barriers during sorting, or move sorting to a dedicated area.", a:[0.5,6,15]},
  emergency:["Shout and signal the driver to stop","Call first aid if someone is hit","Do not move the forklift if someone is trapped unless told","Report the near miss or incident"],
  quiz:[["Where should pedestrians walk in the warehouse?",["Anywhere quick","Barrier-protected walkways","Behind forklifts","In the loading bay"],1],["When should cleaning in the warehouse happen?",["During peak traffic","In blocked areas or quiet periods","Only at night","Whenever convenient"],1],["What should you do before passing a forklift?",["Walk faster","Make eye contact with the driver","Look at your phone","Walk behind it"],1]],
  discussion:"Where in our warehouse or yard do people still cross forklift routes?"
 }
},
{
 id:"parking", req:"R.1.4.1.28", name:"Safe parking and key control", src:"Self-assessment R.1.4.1.28",
 posters:[
  {icon:"forklift", main:"Park it safe. Take the key.", points:["Park only in marked parking bays","Follow key control every time","Never leave a forklift running"], reminder:"An unattended truck with the key in is an accident waiting."}
 ],
 deck:{
  title:"Park it safe, take the key",
  objectives:["Use the designated parking bays","Follow the key control process","Recognise unsafe parking during safety rounds"],
  why:["An untrained person can drive off in an unattended truck","Badly parked equipment blocks walkways and exits","Key control proves only trained drivers operate trucks"],
  hazard:["A forklift left running at the dock","Keys left in the ignition on break","A pallet jack blocking a fire exit","Trucks parked on walkways"],
  actions:[["Park only in marked parking bays","Forks down, brake on, in the bay for that equipment."],["Follow key control every time","Return the key to the key control point and sign as the process says."],["Never leave a forklift running","Switch off before you step away, even for a minute."]],
  do:["Lower forks to the floor","Apply the parking brake","Return the key"],
  dont:["Park in walkways or exits","Leave keys in the truck","Lend your key to someone untrained"],
  kinney:null,
  emergency:["If an unauthorised person drives, tell them to stop","Remove the key and secure the truck","Report to your supervisor","Check the key control log"],
  quiz:[["Where must forklifts be parked?",["Anywhere close","In marked parking bays","On walkways","At fire exits"],1],["What happens to the key after parking?",["Leave it in","Give it to anyone","Return it under key control","Hide it"],2],["Before stepping away from a forklift you should:",["Leave it running","Switch off, forks down, brake on","Raise the forks","Leave the key in"],1]],
  discussion:"Where do trucks get parked badly on our site, and why?"
 }
},
{
 id:"racking", req:"R.1.4.1.21", name:"Safe racking", src:"Self-assessment R.1.4.1.21",
 posters:[
  {icon:"warning", main:"Report racking damage straight away", points:["Bent upright? Stop loading that bay","Never climb the racking","Stay within the marked load limits"], reminder:"Changes to racking go through MOC - no DIY fixes."}
 ],
 deck:{
  title:"Safe racking",
  objectives:["Spot racking damage","Act when damage is found","Respect load limits and MOC"],
  why:["Damaged racking can collapse without warning","Falling stock can kill","Small bumps add up over time"],
  hazard:["A forklift hitting an upright","Overloaded top beams","People climbing racks to reach stock","Racking moved without approval"],
  actions:[["Bent upright? Stop loading that bay","Unload if safe, block the bay and report it the same shift."],["Never climb the racking","Use the right equipment to reach stock."],["Stay within the marked load limits","Check the load sign before placing pallets."]],
  do:["Report every racking impact","Block damaged bays","Check load signs"],
  dont:["Hide a forklift strike","Climb racks","Change racking without MOC"],
  kinney:{task:"Loading a bay with a bent upright", b:[3,6,15], controls:"Block and unload the bay, inspect and repair under MOC before reuse.", a:[0.5,6,15]},
  emergency:["Move people away from damaged racking","Block the area","Call your supervisor","Do not unload if it is unstable"],
  quiz:[["You hit an upright with a forklift. What do you do?",["Carry on if it looks fine","Report it straight away","Straighten it yourself","Wait for the yearly check"],1],["Can you climb racking to reach stock?",["Yes, carefully","Yes, if quick","No, never","Only with gloves"],2],["Changes to racking must go through:",["Nobody","MOC","The driver","Stores"],1]],
  discussion:"When did we last report a racking strike, and what happened?"
 }
},
{
 id:"pallet", req:"R.1.4.1.20", name:"Safe pallet repair", src:"Self-assessment R.1.4.1.20 and R.1.4.1.8",
 posters:[
  {icon:"warning", main:"Repair pallets only in the repair area", points:["Never repair pallets in active aisles","Wear gloves and safety shoes","Keep nails and offcuts off the floor"], reminder:"The repair area keeps you away from forklift traffic."}
 ],
 deck:{
  title:"Safe pallet repair",
  objectives:["Use the dedicated pallet repair area","Wear the right PPE","Keep the area clear and tidy"],
  why:["Pallet repair puts people close to forklift routes","Nails and splinters cause hand and foot injuries","Damaged pallets cause falling loads"],
  hazard:["Repairing pallets next to the dock","Loose nails on the floor","Lifting heavy pallets alone","Using damaged tools"],
  actions:[["Never repair pallets in active aisles","Take pallets to the dedicated area away from traffic."],["Wear gloves and safety shoes","Inspect them first; replace damaged PPE."],["Keep nails and offcuts off the floor","Clear as you go to prevent trips and punctures."]],
  do:["Use the repair area","Get help with heavy pallets","Inspect tools before use"],
  dont:["Repair in the aisle","Leave nails on the floor","Use a damaged pallet"],
  kinney:null,
  emergency:["Stop and get first aid for cuts or punctures","Clear the area","Report the injury","Check the tool or pallet that caused it"],
  quiz:[["Where are pallets repaired?",["In any aisle","In the dedicated repair area","At the dock","Outside the gate"],1],["Which PPE is needed?",["None","Gloves and safety shoes","Only a cap","Only a vest"],1],["Why use a dedicated area?",["It looks tidy","It keeps you away from forklift traffic","It is warmer","It is required for audits only"],1]],
  discussion:"Is our pallet repair area always used? If not, why not?"
 }
},
{
 id:"confined", req:"R.1.10.1.2", name:"Confined spaces", src:"Self-assessment R.1.10.1.2; S.A.F.E. form",
 posters:[
  {icon:"warning", main:"No permit, no standby - no entry", points:["Confined space permit before entry","Standby person outside the whole time","Rescue team ready before you go in"], reminder:"Never rush in after a collapsed worker. Raise the alarm first."}
 ],
 deck:{
  title:"Confined space entry",
  objectives:["Recognise confined spaces in the brewery","Follow the permit and standby rules","Know the rescue plan before entry"],
  why:["Tanks and vessels can hold CO2, nitrogen or low oxygen","You can collapse in seconds without warning","Untrained rescuers often become the next victims"],
  hazard:["Fermentation and storage tanks","Brewhouse vessels and kettles","Pits, sumps and silos","CIP tanks"],
  actions:[["Confined space permit before entry","Isolate, ventilate and test the atmosphere as the permit requires."],["Standby person outside the whole time","Permanent supervision for the whole time anyone is inside."],["Rescue team ready before you go in","The trained rescue team and equipment are ready before entry."]],
  do:["Test the atmosphere before entry","Keep contact with the standby","Wear your personal gas detector"],
  dont:["Enter without a permit","Leave the standby post","Go in to rescue without breathing apparatus"],
  kinney:{task:"Entering a tank for inspection", b:[3,2,40], controls:"Permit, isolation, ventilation, gas testing, permanent standby, trained rescue team.", a:[0.5,2,40]},
  emergency:["Standby raises the alarm immediately","Do not enter to rescue unless trained and equipped","Call the rescue team","Give first aid once the person is out"],
  quiz:[["Who must be outside during entry?",["Nobody","A standby person the whole time","Only for the first minute","The supervisor at the end"],1],["A worker collapses inside. What do you do first?",["Run in","Raise the alarm","Wait","Call their family"],1],["How often are confined space rescue drills held?",["Never","At least yearly","Every 5 years","Only after incidents"],1]],
  discussion:"Which confined spaces do we enter most, and is the rescue plan ready every time?"
 }
},
{
 id:"lone", req:"R.1.1.12.1", name:"Lone working", src:"Self-assessment R.1.1.12.1",
 posters:[
  {icon:"person", main:"Working alone? Someone must know", points:["Tell your supervisor where you are","Keep your radio or phone on you","Agree check-in times and keep them"], reminder:"If a job is not safe to do alone, do not do it alone."}
 ],
 deck:{
  title:"Working alone safely",
  objectives:["Recognise lone-worker tasks","Use the agreed check-in system","Know which jobs must never be done alone"],
  why:["Nobody can help if nobody knows you are hurt","Night shifts and remote areas increase the risk","A simple check-in can save a life"],
  hazard:["Utilities rounds at night","Checks in remote tank farms","Weekend maintenance","Security patrols"],
  actions:[["Tell your supervisor where you are","Say where you are going and how long it will take."],["Keep your radio or phone on you","Keep it charged and switched on."],["Agree check-in times and keep them","Missed check-in means someone comes to look for you."]],
  do:["Check in on time","Stay in contact","Ask for a buddy for risky jobs"],
  dont:["Go to remote areas without telling anyone","Switch off your radio","Do high-risk tasks alone"],
  kinney:{task:"Night round in the ammonia plant room", b:[3,6,15], controls:"Check-in schedule, radio, fixed gas detection and an agreed buddy for entry.", a:[0.5,6,15]},
  emergency:["If someone misses a check-in, call them","If no answer, go with a colleague","Raise the alarm if you find them hurt","Report the event"],
  quiz:[["Before working alone you must:",["Tell nobody","Tell your supervisor where you are","Turn off your phone","Wait until night"],1],["A missed check-in means:",["Nothing","Someone comes to look for you","You lose pay","The job is finished"],1],["High-risk tasks should be:",["Done alone","Done with a buddy or not alone","Done quickly","Done at night"],1]],
  discussion:"Which jobs on our shift are done alone, and is the check-in clear?"
 }
},
{
 id:"certified", req:"R.1.1.3.1", name:"Certified safety equipment", src:"Self-assessment R.1.1.3.1",
 posters:[
  {icon:"shield", main:"Use only certified safety equipment", points:["Check the tag or certificate first","No tag? Don't use it - report it","Never swap in parts that are not approved"], reminder:"Detectors, valves, PPE and lifting gear must meet the standard."}
 ],
 deck:{
  title:"Use only certified safety equipment",
  objectives:["Recognise which equipment must be certified","Check tags and certificates before use","Report uncertified items"],
  why:["Fake or uncertified equipment can fail when you need it","Safety valves, detectors and light curtains protect lives","A cheap replacement can cost a life"],
  hazard:["A relief valve replaced with a cheaper one","A light curtain bypassed or not certified","Unmarked slings in the store","PPE bought outside approved vendors"],
  actions:[["Check the tag or certificate first","Look for the marking or inspection tag before use."],["No tag? Don't use it - report it","Quarantine it and tell your team leader."],["Never swap in parts that are not approved","Use only parts that meet ISO/IEC or national standards."]],
  do:["Check tags","Quarantine doubtful items","Buy through approved vendors"],
  dont:["Use untagged lifting gear","Bypass safety devices","Fit uncertified spare parts"],
  kinney:null,
  emergency:["Stop using the item","Tag it out of service","Report it","Replace it with certified equipment"],
  quiz:[["Before using a sling you should:",["Check its tag","Paint it","Stretch it","Nothing"],0],["An item has no certificate. You should:",["Use it carefully","Report and quarantine it","Give it away","Hide it"],1],["Which is safety equipment that must be certified?",["A coffee cup","A safety valve","A notebook","A chair"],1]],
  discussion:"Where could uncertified equipment be in use in our area?"
 }
},
{
 id:"flammable", req:"R.1.3.7.3", name:"Flammable gases and liquids", src:"Self-assessment R.1.3.7.1-R.1.3.7.4; S.A.F.E. form",
 posters:[
  {icon:"warning", main:"No ignition sources near flammables", points:["Hot work only with a permit","Keep cylinders secured with caps on","Report leaks and spills straight away"], reminder:"Respect the marked explosion risk zones."}
 ],
 deck:{
  title:"Flammable gases and liquids",
  objectives:["Recognise flammable materials on site","Control ignition sources","Follow hot work and storage rules"],
  why:["Vapours can ignite from a spark or hot surface","Fire spreads fast in a plant room or store","Classified zones exist for a reason"],
  hazard:["Gas cylinders in workshops","Fuel and solvents in stores","LPG for forklifts","Welding near flammables"],
  actions:[["Hot work only with a permit","Hot work permit, fire watch and extinguisher in place."],["Keep cylinders secured with caps on","Chain cylinders upright and keep caps on when not in use."],["Report leaks and spills straight away","Stop work, remove ignition sources and report."]],
  do:["Use non-sparking tools where required","Store flammables in approved areas","Know where the extinguishers are"],
  dont:["Smoke outside designated areas","Weld without a permit","Store cylinders loose"],
  kinney:{task:"Grinding near a solvent store", b:[3,3,15], controls:"Hot work permit, move or cover flammables, fire watch, extinguisher ready.", a:[0.5,3,15]},
  emergency:["Stop work and remove ignition sources","Raise the fire alarm if needed","Evacuate to the assembly point","Only fight a small fire if trained"],
  quiz:[["Hot work needs:",["Nothing","A hot work permit","Only gloves","A radio"],1],["Gas cylinders must be:",["Lying on the floor","Secured upright with caps on","Kept in offices","Painted"],1],["You smell gas. First you:",["Light a match","Stop work and remove ignition sources","Ignore it","Open a cylinder"],1]],
  discussion:"Where do we store flammables, and are the rules followed there?"
 }
},
{
 id:"emergency", req:"R.1.11.1.4", name:"Emergency drills and response", src:"Self-assessment R.1.11.1.4 and R.1.11.1.8",
 posters:[
  {icon:"beacon", main:"Alarm sounds? Go to your assembly point", points:["Know your nearest exit and route","Never use lifts during an evacuation","Report to the roll call - don't go back"], reminder:"Take every drill seriously - it is practice for the real thing."}
 ],
 deck:{
  title:"Emergency drills and response",
  objectives:["Know the alarms and escape routes","Go to the right assembly point","Explain why drills matter"],
  why:["In an emergency there is no time to think","Drills show gaps before a real event","Ammonia sites must drill an NH3 release at least yearly"],
  hazard:["Blocked fire exits","People who do not know the assembly point","Visitors and contractors without guidance","Going back for belongings"],
  actions:[["Know your nearest exit and route","Walk your route now so you know it."],["Never use lifts during an evacuation","Use the stairs and marked routes."],["Report to the roll call - don't go back","Stay at the assembly point until told it is safe."]],
  do:["Keep exits clear","Guide visitors","Take part in drills"],
  dont:["Block escape routes","Go back inside","Ignore an alarm"],
  kinney:null,
  emergency:["Stop work and make machines safe if quick","Leave by the nearest safe exit","Go to the assembly point","Report to the warden for roll call"],
  quiz:[["When the alarm sounds you should:",["Finish your task","Go to the assembly point","Use the lift","Call home"],1],["How often must an ammonia site run an NH3 release drill?",["Never","At least yearly","Every 10 years","Only after a leak"],1],["Can you go back inside for your phone?",["Yes","Only if quick","No, wait for all clear","If nobody sees"],2]],
  discussion:"Does everyone on our shift know their assembly point, including contractors?"
 }
},
{
 id:"health", req:"R.1.13.1.1", name:"Occupational health", src:"Self-assessment R.1.13.1.1; PPE Standard AFR-VPOS.A09.001",
 posters:[
  {icon:"shield", main:"Protect your health, not just your hands", points:["Wear hearing protection in noise zones","Use dust and chemical protection as listed","Report symptoms early to the clinic"], reminder:"Health damage builds up slowly - protect yourself every day."}
 ],
 deck:{
  title:"Protecting your health at work",
  objectives:["Name the main health risks in the brewery","Use the right protection for each","Report symptoms early"],
  why:["Noise, dust and chemicals damage health over years","Damage is often permanent","Early reporting means early help"],
  hazard:["Noise on the packaging lines","Grain dust in the brewhouse and silos","Chemicals in CIP and dosing","Heat in the bottle washer area"],
  actions:[["Wear hearing protection in noise zones","Zones at 85 dB(A) and above are signed."],["Use dust and chemical protection as listed","Follow the PPE matrix for the area and task."],["Report symptoms early to the clinic","Cough, hearing changes, skin rash or pain - report it."]],
  do:["Follow the PPE matrix","Wash before eating","Attend medical checks"],
  dont:["Remove protection in noisy areas","Ignore symptoms","Eat in process areas"],
  kinney:null,
  emergency:["For chemical contact use the safety shower or eyewash","Get first aid","Report to the clinic","Report the exposure"],
  quiz:[["Hearing protection is required from:",["60 dB(A)","85 dB(A)","100 dB(A)","Never"],1],["Health damage from noise is often:",["Temporary","Permanent","Painful at once","Harmless"],1],["You notice a skin rash after using a chemical. You:",["Ignore it","Report to the clinic","Use more chemical","Wait a year"],1]],
  discussion:"Which health risk in our area do we take least seriously?"
 }
}
];
