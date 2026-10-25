/* ABL Safety Posters — offline content, part B (see part A for format). */
window.TOPICS_B = [
{
 id:"lifting", req:"R.1.1.9.3", name:"Lifting equipment", src:"Self-assessment R.1.1.9.3",
 posters:[
  {icon:"warning", main:"Inspect slings and hoists before you lift", points:["Pre-use check before every lift","Damaged or untagged? Tag out, report","Never stand under a suspended load"], reminder:"Lifting gear is formally inspected at least once a year."}
 ],
 deck:{
  title:"Lifting equipment checks",
  objectives:["Do a pre-use check on lifting gear","Recognise damaged or untagged gear","Keep clear of suspended loads"],
  why:["A failed sling drops the load instantly","Falling loads cause fatal injuries","Damage is often visible if you look"],
  hazard:["Frayed slings in the workshop","Hoists with missing tags","Chain blocks stored on the floor","Anchor points never inspected"],
  actions:[["Pre-use check before every lift","Look for cuts, kinks, wear, a readable tag and the safe working load."],["Damaged or untagged? Tag out, report","Take it out of use and tell your team leader."],["Never stand under a suspended load","Keep everyone out of the drop zone."]],
  do:["Check the safe working load","Store gear properly (5S)","Use tag lines"],
  dont:["Overload","Use knotted slings","Walk under a load"],
  kinney:{task:"Lifting a motor with a hoist", b:[3,3,15], controls:"Pre-use check, tagged gear within SWL, exclusion zone, trained operator.", a:[0.5,3,15]},
  emergency:["Stop the lift and lower the load if safe","Clear the area","Call first aid if needed","Report and quarantine the gear"],
  quiz:[["When do you check lifting gear?",["Yearly only","Before every lift","Never","After it breaks"],1],["An untagged sling should be:",["Used carefully","Tagged out and reported","Painted","Shortened"],1],["Where should people be during a lift?",["Under the load","Out of the drop zone","Holding the load","On the load"],1]],
  discussion:"When did you last see damaged lifting gear still in use?"
 }
},
{
 id:"lift-contractor", req:"R.1.1.9.4", name:"Non-routine lifts by contractors", src:"Self-assessment R.1.1.9.4; S.A.F.E. form",
 posters:[
  {icon:"warning", main:"Crane lift? Plan, permit, exclusion zone", points:["Lifting plan and permit before the lift","Only the competent rigger signals","Barrier off the area under the load"], reminder:"Contractors follow the same lifting rules as our own teams."}
 ],
 deck:{
  title:"Non-routine lifts by contractors",
  objectives:["Know when a lifting plan is needed","Check the contractor's permit and competence","Set and respect the exclusion zone"],
  why:["Mobile crane lifts carry high consequences","Contractors may not know our site","One signaller avoids confusion"],
  hazard:["Mobile cranes in the yard","Lifting tanks or motors during projects","Overhead power lines","Lifts over walkways"],
  actions:[["Lifting plan and permit before the lift","No plan, no permit - no lift. Use the SAFE form."],["Only the competent rigger signals","One trained person gives signals to the operator."],["Barrier off the area under the load","Use barriers and a banksman to keep people out."]],
  do:["Check crane and gear certificates","Check ground conditions","Brief everyone before lifting"],
  dont:["Lift over people","Start without a plan","Let anyone signal"],
  kinney:{task:"Mobile crane lifting a tank", b:[3,1,40], controls:"Lifting plan, certified crane and gear, competent rigger, exclusion zone.", a:[0.5,1,40]},
  emergency:["Stop the lift on any doubt","Clear people away","Lower the load safely if possible","Report to the project owner"],
  quiz:[["Before a non-routine crane lift you need:",["Nothing","A lifting plan and permit","Only a radio","A photo"],1],["Who gives signals to the crane operator?",["Anyone nearby","Only the competent rigger","The driver","Visitors"],1],["What protects people under the lift?",["A barrier exclusion zone","A hard hat only","Nothing","A sign far away"],0]],
  discussion:"How do we check a contractor is ready before a crane lift?"
 }
},
{
 id:"height", req:"R.1.8.1.11", name:"Working at height", src:"Self-assessment R.1.8.1.11; S.A.F.E. form",
 posters:[
  {icon:"hardhat", main:"Check harness and ladder before use", points:["Pre-use check every single time","No tag or inspection? Don't use it","Working at height permit first"], reminder:"Height equipment is tagged and formally inspected at least yearly."}
 ],
 deck:{
  title:"Working at height safely",
  objectives:["Do a pre-use check on height equipment","Use the working at height permit","Know safe and unsafe roofs"],
  why:["Falls from height are a top cause of deaths","Damaged harnesses and ladders fail suddenly","Many roofs cannot take a person's weight"],
  hazard:["Ladders at silos and tanks","Roof work on warehouses","Scaffolds during projects","Aerial lifts in the warehouse"],
  actions:[["Pre-use check every single time","Check straps, buckles, stitching, rungs and feet before use."],["No tag or inspection? Don't use it","Untagged or damaged equipment is taken out of use and reported."],["Working at height permit first","Use the SAFE form and get the permit before going up."]],
  do:["Keep three points of contact","Clip on to a certified anchor","Check roof signs"],
  dont:["Use a damaged harness","Stand on the top rung","Walk on an unsafe roof"],
  kinney:{task:"Working on a warehouse roof", b:[3,2,15], controls:"Permit, safe roof check, guardrails or harness on certified anchor, rescue plan.", a:[0.5,2,15]},
  emergency:["Do not leave a fallen worker hanging - start the rescue plan","Call the emergency team","Give first aid","Report and quarantine the equipment"],
  quiz:[["When do you check a harness?",["Yearly","Before every use","Never","After a fall"],1],["Before working at height you need:",["A permit","Only gloves","A radio","Nothing"],0],["How many points of contact on a ladder?",["One","Two","Three","None"],2]],
  discussion:"Where do we work at height without a permit today?"
 }
},
{
 id:"pressure", req:"R.1.3.6.4", name:"Pressure vessels and relief valves", src:"Self-assessment R.1.3.6.3-R.1.3.6.5",
 posters:[
  {icon:"warning", main:"Never block or tamper with relief valves", points:["Report leaks, hissing or damage","Depressurise before opening anything","Only trained people adjust pressure settings"], reminder:"Relief valves are your last protection against an explosion."}
 ],
 deck:{
  title:"Pressure vessels and relief valves",
  objectives:["Recognise pressure equipment on site","Depressurise before opening","Never tamper with safety devices"],
  why:["Stored pressure can release with explosive force","Relief valves stop vessels bursting","Tampering hides a dangerous fault"],
  hazard:["CO2 tanks and lines","Compressed air receivers","Steam boilers","Fermentation tanks under pressure"],
  actions:[["Report leaks, hissing or damage","Stop and report straight away."],["Depressurise before opening anything","Isolate, vent and prove zero pressure before work."],["Only trained people adjust pressure settings","Settings and relief valves are set and certified by competent people."]],
  do:["Check the gauge shows zero","Use LOTO","Keep certificates up to date"],
  dont:["Gag or plug a relief valve","Open a pressurised flange","Ignore a leaking valve"],
  kinney:{task:"Opening a flange on a CO2 line", b:[6,2,15], controls:"Isolate, depressurise, prove zero, LOTO and SAFE form.", a:[0.5,2,15]},
  emergency:["Move away from the leak","Raise the alarm","Isolate from a safe distance if trained","Report the event"],
  quiz:[["Before opening pressure equipment you:",["Open slowly","Depressurise and prove zero","Ask a friend","Tap it"],1],["A relief valve is hissing. You:",["Plug it","Report it","Ignore it","Hit it"],1],["Who adjusts pressure settings?",["Anyone","Only trained competent people","Visitors","Cleaners"],1]],
  discussion:"Which pressure equipment in our area worries you most?"
 }
},
{
 id:"co2", req:"R.1.3.8.3", name:"CO2 and nitrogen", src:"Self-assessment R.1.3.8.3; S.A.F.E. form",
 posters:[
  {icon:"beacon", main:"CO2 and nitrogen give no warning", points:["Wear your personal gas detector","Detector alarms? Leave and report","No tank entry without a permit"], reminder:"You cannot see or smell CO2 or nitrogen. Trust your detector."}
 ],
 deck:{
  title:"CO2 and nitrogen safety",
  objectives:["Explain why CO2 and nitrogen are dangerous","Use personal and fixed detectors","React correctly to a gas alarm"],
  why:["High CO2 or low oxygen can make you collapse quickly","You cannot see or smell either gas","CO2 is heavier than air and collects low down"],
  hazard:["Fermentation cellars","CO2 recovery plant","Tank and pit entry","Nitrogen used for purging"],
  actions:[["Wear your personal gas detector","Switch it on and bump-test it as instructed."],["Detector alarms? Leave and report","Leave at once, warn others and report."],["No tank entry without a permit","Confined space permit and atmosphere testing first."]],
  do:["Check fixed detectors are working","Keep emergency ventilation clear","Report alarms"],
  dont:["Ignore or silence alarms","Enter low areas without a detector","Rescue without breathing apparatus"],
  kinney:{task:"Working in the fermentation cellar", b:[3,6,15], controls:"Fixed CO2 detection with ventilation, personal detectors, trained staff.", a:[0.5,6,15]},
  emergency:["Leave the area immediately","Raise the alarm","Do not re-enter to rescue unless equipped","Report to your supervisor"],
  quiz:[["Can you smell CO2?",["Yes","No","Only at night","Sometimes"],1],["Your detector alarms. You:",["Switch it off","Leave and report","Keep working","Shake it"],1],["Where does CO2 collect?",["Near the ceiling","Low down","Outside only","Nowhere"],1]],
  discussion:"Is everyone in the cellars wearing a working gas detector?"
 }
},
{
 id:"steam", req:"R.1.3.4.1", name:"Steam and hot water", src:"Self-assessment R.1.3.4.1-R.1.3.4.2",
 posters:[
  {icon:"warning", main:"Isolate and cool before steam work", points:["Close, lock and tag the steam supply","Drain condensate and check for pressure","Wear face and hand protection"], reminder:"Steam burns are deep and invisible - treat every line as live."}
 ],
 deck:{
  title:"Steam and hot water safety",
  objectives:["Recognise steam and hot water hazards","Isolate safely before work","Protect against burns"],
  why:["Steam causes deep, severe burns","Trapped condensate can cause water hammer","Pipes stay hot after isolation"],
  hazard:["Boiler house","Brewhouse steam lines","CIP hot water","Pasteuriser and bottle washer"],
  actions:[["Close, lock and tag the steam supply","Use LOTO on the isolation valves."],["Drain condensate and check for pressure","Vent and prove there is no pressure before opening."],["Wear face and hand protection","Use the PPE listed for the task."]],
  do:["Let lines cool","Open valves slowly","Report leaks"],
  dont:["Open a live steam line","Stand in front of a flange as it opens","Ignore water hammer"],
  kinney:{task:"Replacing a steam trap", b:[6,3,7], controls:"Isolate with LOTO, drain, cool, prove zero pressure, face shield and gloves.", a:[1,3,7]},
  emergency:["Cool burns with clean running water","Call first aid","Do not burst blisters","Report the incident"],
  quiz:[["Before opening a steam line you:",["Open fast","Isolate, drain and prove zero","Ask later","Wear sandals"],1],["Burn first aid starts with:",["Ice","Clean running water","Butter","Nothing"],1],["Why open valves slowly?",["To avoid water hammer","It looks better","No reason","To save time"],0]],
  discussion:"Where could someone touch a hot line by mistake in our area?"
 }
},
{
 id:"ammonia", req:"R.1.3.2.6", name:"Ammonia (NH3)", src:"GTS.GEN.SFT.GSP.010 Utilities Refrigeration Safety",
 posters:[
  {icon:"beacon", main:"Ammonia alarm? Leave the room now", points:["Know your marked escape route and exit","Know the emergency shutoff switch by the door","Never switch off fans during a leak"], reminder:"The alarm sounds at 25 ppm. Don't wait to smell it - get out and report."}
 ],
 deck:{
  title:"Ammonia: alarms and escape",
  objectives:["Explain the ammonia alarm levels","Find escape routes and the emergency shutoff","Respond correctly to a leak"],
  why:["Ammonia is toxic and can kill in high concentrations","The plant room has alarms, fans and shutoffs to protect you","Fast, calm action prevents injuries"],
  hazard:["Ammonia machinery room","Valve stations and evaporators","Maintenance on refrigeration lines","Leaks during filling or draining"],
  actions:[["Know your marked escape route and exit","Machinery rooms have marked routes and a door straight outside."],["Know the emergency shutoff switch by the door","It sits outside the machinery room door to stop the equipment."],["Never switch off fans during a leak","Fans run until detectors read below 150 ppm."]],
  do:["Leave at the first alarm","Report every smell or alarm","Take part in the NH3 drill"],
  dont:["Wait to smell ammonia","Re-enter without breathing apparatus","Block exit doors"],
  kinney:{task:"Opening a valve on an ammonia line", b:[3,3,15], controls:"SAFE form, pump-out and isolate, gas detection, breathing apparatus ready.", a:[0.5,3,15]},
  emergency:["Leave by the marked exit","Raise the alarm","Use the emergency shutoff if safe","Go to the assembly point and report"],
  quiz:[["At what level does the first ammonia alarm sound?",["5 ppm","25 ppm","500 ppm","10,000 ppm"],1],["When can emergency fans be switched off?",["Any time","When detectors are below 150 ppm","Never","After 5 minutes"],1],["Where is the emergency shutoff switch?",["Inside the compressor","Outside the machinery room door","In the canteen","At the gate"],1]],
  discussion:"Could everyone on our shift find the ammonia shutoff switch in the dark?"
 }
},
{
 id:"dust", req:"R.1.3.3.1", name:"Dust explosion", src:"Self-assessment R.1.3.3.1-R.1.3.3.4",
 posters:[
  {icon:"warning", main:"Grain dust can explode - keep it clean", points:["Clean dust build-up every shift","No hot work without a permit","Report damaged covers and seals"], reminder:"A thin layer of dust is enough to feed an explosion."}
 ],
 deck:{
  title:"Preventing dust explosions",
  objectives:["Explain why grain dust is dangerous","Keep dust under control","Control ignition sources"],
  why:["Fine grain and malt dust can explode","A first blast can lift settled dust into a bigger one","Good housekeeping removes the fuel"],
  hazard:["Malt intake and silos","Mills and conveyors","Dust on beams and ledges","Hot work near grain areas"],
  actions:[["Clean dust build-up every shift","Use approved cleaning methods, not compressed air."],["No hot work without a permit","Grinding and welding near dust need a permit and fire watch."],["Report damaged covers and seals","Leaking covers spread dust."]],
  do:["Keep surfaces clean","Use approved tools in zoned areas","Report hot bearings"],
  dont:["Blow dust with compressed air","Smoke near grain areas","Ignore dust leaks"],
  kinney:{task:"Grinding near the malt intake", b:[3,1,40], controls:"Hot work permit, clean the area first, fire watch, isolate the conveyor.", a:[0.5,1,40]},
  emergency:["Stop equipment if safe","Raise the fire alarm","Evacuate","Do not open a smouldering silo"],
  quiz:[["Can grain dust explode?",["No","Yes","Only when wet","Only at night"],1],["How should you clean dust?",["Compressed air","Approved methods, not compressed air","Leave it","Burn it"],1],["Hot work near grain needs:",["Nothing","A permit and fire watch","Speed","A helper only"],1]],
  discussion:"Where does dust build up in our area, and who cleans it?"
 }
},
{
 id:"electrical", req:"R.1.3.5.3", name:"Electrical safety", src:"Self-assessment R.1.3.5.3; S.A.F.E. form",
 posters:[
  {icon:"warning", main:"Only authorised people work on electrics", points:["Lock out and test before you touch","No live work without a permit","Report damaged cables and panels"], reminder:"Treat every wire as live until proven dead."}
 ],
 deck:{
  title:"Electrical safety",
  objectives:["Know who may do electrical work","Apply LOTO and test before work","Spot and report electrical damage"],
  why:["Electric shock and arc flash can kill","Wet areas in the brewery increase the risk","Damaged cables are a common cause"],
  hazard:["Wet floors near panels","Damaged extension leads","Open panel doors","Live work during breakdowns"],
  actions:[["Lock out and test before you touch","Isolate, lock, tag and test for dead."],["No live work without a permit","Live or high-voltage work needs a specific permit."],["Report damaged cables and panels","Take damaged equipment out of use."]],
  do:["Use GFCI-protected extension leads","Keep panel doors closed","Use electrical PPE"],
  dont:["Bypass interlocks","Use damaged leads","Work on electrics if not authorised"],
  kinney:{task:"Changing a motor on a conveyor", b:[3,3,15], controls:"Authorised electrician, LOTO, test for dead, SAFE form.", a:[0.5,3,15]},
  emergency:["Switch off the power if safe","Do not touch the person until power is off","Call first aid","Report the incident"],
  quiz:[["Before electrical work you must:",["Test for dead after LOTO","Just switch off","Ask a friend","Nothing"],0],["Live work needs:",["A permit","Speed","Nothing","Gloves only"],0],["Someone is being electrocuted. First:",["Grab them","Switch off the power","Pour water","Run away"],1]],
  discussion:"Where do we see damaged leads or open panels in our area?"
 }
},
{
 id:"machine", req:"R.1.7.1.14", name:"Machine safety and LOTO", src:"Self-assessment R.1.7.1.14; S.A.F.E. form",
 posters:[
  {icon:"warning", main:"Never reach into a moving machine", points:["Stop and lock out before clearing jams","Use the two-hand jog control","Never bypass guards or interlocks"], reminder:"Machines do not stop for hands. LOTO every time."}
 ],
 deck:{
  title:"Machine safety and LOTO",
  objectives:["Use LOTO before clearing jams","Use jogging controls safely","Keep guards and interlocks working"],
  why:["Caught-in injuries are among the most severe","Jams tempt people to reach in","Guards only protect when they are in place"],
  hazard:["Labeller and filler jams","Conveyor chains and sprockets","Palletiser cells","Bypassed interlocks"],
  actions:[["Stop and lock out before clearing jams","Apply your lock and tag, test it cannot start."],["Use the two-hand jog control","Both hands on the controls keeps them out of danger."],["Never bypass guards or interlocks","A bypass needs a permit from the SAFE form."]],
  do:["Use your own lock","Test before working","Report broken guards"],
  dont:["Reach in while running","Use someone else's lock","Tape over interlocks"],
  kinney:{task:"Clearing a jam on the filler", b:[6,6,7], controls:"LOTO, guards with interlocks, two-hand jog, trained operator.", a:[0.5,6,7]},
  emergency:["Hit the emergency stop","Call first aid","Do not reverse the machine to free someone unless trained","Report the incident"],
  quiz:[["Before clearing a jam you:",["Reach in fast","Lock out and test","Ask someone to watch","Use a stick while running"],1],["Can you bypass an interlock?",["Yes if quick","Only with a permit","Always","Never mind"],1],["Whose lock do you use?",["Your own","Anyone's","None","The supervisor's"],0]],
  discussion:"Which machine do people most often reach into, and why?"
 }
},
{
 id:"heat", req:"R.1.1.10.1", name:"Heat stress", src:"Self-assessment R.1.1.10.1",
 posters:[
  {icon:"shield", main:"Drink water. Take your breaks.", points:["Drink water often, before you are thirsty","Rest in cool, shaded areas","Dizzy or sick? Stop and report"], reminder:"Heat, humidity and hard work add up. Look out for each other."}
 ],
 deck:{
  title:"Beat heat stress",
  objectives:["Recognise signs of heat stress","Use water, rest and shade","Help a colleague showing symptoms"],
  why:["Accra heat and plant heat add together","Heat stress causes mistakes and collapse","It can become life-threatening"],
  hazard:["Boiler house and brewhouse","Bottle washer and pasteuriser","Outdoor yard work","Heavy PPE in hot areas"],
  actions:[["Drink water often, before you are thirsty","Keep water near you during hot tasks."],["Rest in cool, shaded areas","Follow the work-rest cycle for hot jobs."],["Dizzy or sick? Stop and report","Headache, confusion or cramps are warning signs."]],
  do:["Drink water regularly","Wear light, breathable clothing where allowed","Watch your colleagues"],
  dont:["Skip breaks to finish faster","Ignore dizziness","Work alone in very hot areas"],
  kinney:null,
  emergency:["Move the person to shade","Give water if they are conscious","Cool them with water and air","Call first aid"],
  quiz:[["When should you drink water?",["Only when thirsty","Often, before thirst","At the end of the shift","Never at work"],1],["A colleague is confused and hot. You:",["Ignore it","Move them to shade and call first aid","Give them coffee","Send them home alone"],1],["Which is a sign of heat stress?",["Dizziness","Feeling cold","Hunger","Sleepiness at night"],0]],
  discussion:"Where is it hottest on our shift, and what would help?"
 }
},
{
 id:"manual", req:"R.1.5.1.4", name:"Manual handling", src:"Self-assessment R.1.5.1.4",
 posters:[
  {icon:"person", main:"Use the aid, save your back", points:["Use trolleys and hoists for heavy loads","Lift with your legs, keep the load close","Too heavy or awkward? Get help"], reminder:"Back injuries build up over years - lift smart every time."}
 ],
 deck:{
  title:"Safe manual handling",
  objectives:["Assess a load before lifting","Use mechanical aids","Lift with a safe technique"],
  why:["Back injuries are common and long lasting","Repeated lifting adds strain over time","Aids and good technique prevent most injuries"],
  hazard:["Chemical drums","Kegs and cases","Spare parts in the workshop","Bags of filter aid"],
  actions:[["Use trolleys and hoists for heavy loads","Pick the mechanical aid first."],["Lift with your legs, keep the load close","Feet apart, bend knees, straight back, no twisting."],["Too heavy or awkward? Get help","Use a team lift and agree who leads."]],
  do:["Plan the route first","Keep the load close","Take breaks on repetitive tasks"],
  dont:["Twist while lifting","Lift beyond your ability","Carry loads that block your view"],
  kinney:null,
  emergency:["Stop if you feel pain","Report the strain","Get first aid","Review the task"],
  quiz:[["What should you use first for heavy loads?",["Your back","A mechanical aid","A friend's back","Nothing"],1],["Safe lifting means:",["Twist and lift","Bend knees, keep load close","Lift with straight legs","Lift fast"],1],["A load is awkward. You:",["Try anyway","Get help","Drop it","Kick it"],1]],
  discussion:"Which lift in our area is hardest on the back?"
 }
},
{
 id:"driving", req:"R.1.15.1.1", name:"Driving and commuting", src:"Self-assessment R.1.15.1.1-R.1.15.1.2",
 posters:[
  {icon:"forklift", main:"Belt on. Phone off. Arrive alive.", points:["Wear your seat belt every trip","No phone while driving","Respect the speed limit, on site and on the road"], reminder:"Tired? Stop and rest - no delivery is worth your life."}
 ],
 deck:{
  title:"Safe driving and commuting",
  objectives:["Follow the basic driving rules","Avoid distraction and fatigue","Drive safely on site"],
  why:["Road crashes are a leading cause of work-related deaths","Most crashes come from speed, phones and fatigue","Our people commute every day"],
  hazard:["Busy Accra roads","Night shift commutes","Trucks in the yard","Motorbike commuting"],
  actions:[["Wear your seat belt every trip","Every seat, every trip."],["No phone while driving","Pull over safely to use your phone."],["Respect the speed limit, on site and on the road","Slow down near pedestrians and gates."]],
  do:["Plan rest stops","Wear a helmet on a motorbike","Check your vehicle"],
  dont:["Drink and drive","Speed in the yard","Drive when exhausted"],
  kinney:null,
  emergency:["Make the scene safe","Call emergency services","Give first aid if trained","Report the accident"],
  quiz:[["When must you wear a seat belt?",["Long trips only","Every trip","Never in town","Only at night"],1],["You need to call while driving. You:",["Call while driving","Pull over safely","Text instead","Use video"],1],["Feeling very tired while driving you should:",["Speed up","Stop and rest","Open the window and continue","Drink alcohol"],1]],
  discussion:"What is the riskiest part of your journey to work?"
 }
},
{
 id:"dosing", req:"R.1.6.1.20", name:"Chemical dosing", src:"Self-assessment R.1.6.1.20; S.A.F.E. form",
 posters:[
  {icon:"warning", main:"No open buckets for chemicals", points:["Use labelled, dedicated containers only","Dose only in the dedicated area","Depressurise the vessel before dosing"], reminder:"Wear the PPE listed for the chemical, every time."}
 ],
 deck:{
  title:"Safe chemical dosing",
  objectives:["Follow the dosing rules","Use the right containers and area","Protect yourself from splashes"],
  why:["Caustic and acid cause severe burns","Open buckets spill and splash","Pressurised vessels can spray back"],
  hazard:["CIP caustic and acid","Water treatment chemicals","Lubricants on the lines","Additive dosing"],
  actions:[["Use labelled, dedicated containers only","Open buckets are not allowed."],["Dose only in the dedicated area","Safety shower and spill kit nearby."],["Depressurise the vessel before dosing","Check the gauge or sight glass first."]],
  do:["Read the MSDS","Wear goggles and gloves","Know where the safety shower is"],
  dont:["Mix chemicals","Use unlabelled containers","Dose into a pressurised vessel"],
  kinney:{task:"Manual dosing of caustic", b:[6,6,7], controls:"Automated or closed dosing, labelled containers, face shield and gloves, safety shower.", a:[1,6,7]},
  emergency:["Use the safety shower or eyewash for 15 minutes","Remove contaminated clothing","Call first aid","Report the incident"],
  quiz:[["Can you use an open bucket for chemicals?",["Yes","No","Only for small amounts","Only at night"],1],["Before dosing into a vessel you:",["Check it is depressurised","Shake it","Heat it","Nothing"],0],["Chemical in your eyes. You:",["Rub them","Use the eyewash","Wait","Wipe with a cloth"],1]],
  discussion:"Where do we still dose chemicals by hand, and how could we stop?"
 }
},
{
 id:"toolbox", req:"R.1.12.1.15", name:"Contractor toolbox talks", src:"Self-assessment R.1.12.1.15; PPE Standard scope",
 posters:[
  {icon:"person", main:"Toolbox talk before every job", points:["Talk through today's tasks and risks","Agree the controls before work starts","Everyone speaks up - stop if unsafe"], reminder:"Contractors and our own teams follow the same safety rules."}
 ],
 deck:{
  title:"Daily toolbox talks with contractors",
  objectives:["Run a short daily toolbox talk","Cover tasks, risks and controls","Encourage everyone to speak up"],
  why:["Contractors may not know our site","Daily talks catch new risks","Speaking up prevents incidents"],
  hazard:["New contractors on a project","Jobs that change during the day","Language barriers","Pressure to finish fast"],
  actions:[["Talk through today's tasks and risks","Go through each job and what could go wrong."],["Agree the controls before work starts","Permits, PPE, isolation and barriers."],["Everyone speaks up - stop if unsafe","Anyone can stop the job if it is unsafe."]],
  do:["Keep it short and daily","Check understanding","Record attendance"],
  dont:["Skip it when busy","Talk without listening","Ignore concerns"],
  kinney:null,
  emergency:["Stop the job","Make the area safe","Inform the contract owner","Restart only after review"],
  quiz:[["How often are toolbox talks held?",["Weekly","Daily","Monthly","Never"],1],["Who can stop an unsafe job?",["Only the manager","Anyone","Only safety","Nobody"],1],["A toolbox talk covers:",["Football","Tasks, risks and controls","Pay","Holidays"],1]],
  discussion:"How can we make toolbox talks with contractors more useful?"
 }
},
{
 id:"slips", req:"R.1.1.2.5", name:"Slips, trips and wet floors", src:"Self-assessment R.1.1.2.5 (dry floors and slips, trips and falls toolkits)",
 posters:[
  {icon:"warning", main:"Wet floor? Clean it, sign it, report it", points:["Clean spills straight away","Put out a wet floor sign","Report leaks that keep the floor wet"], reminder:"Safety shoes on, hands free on stairs, eyes on the path."}
 ],
 deck:{
  title:"Slips, trips and wet floors",
  objectives:["Spot slip and trip hazards","Deal with spills fast","Report the cause, not just the puddle"],
  why:["Slips and trips cause many lost-time injuries","Breweries have water, foam and product on floors","Most are easy to prevent"],
  hazard:["Wet floors at the filler","Hoses across walkways","Foam near CIP","Broken glass on the line"],
  actions:[["Clean spills straight away","Use squeegees and drains, not just a mop."],["Put out a wet floor sign","Warn others until it is dry."],["Report leaks that keep the floor wet","Fix the source, not the symptom."]],
  do:["Keep walkways clear","Coil hoses away","Hold the handrail"],
  dont:["Run in the plant","Leave hoses across walkways","Carry loads that block your view"],
  kinney:{task:"Walking past the filler", b:[6,10,3], controls:"Fix leaks, drainage, anti-slip floor, safety shoes, signs.", a:[1,10,3]},
  emergency:["Do not move someone with a suspected back injury","Call first aid","Make the area safe","Report the cause"],
  quiz:[["You see a spill. You:",["Walk around it","Clean it and sign it","Wait for cleaners","Ignore it"],1],["A leak keeps making the floor wet. You:",["Mop every hour","Report the leak","Ignore it","Cover it"],1],["On stairs you should:",["Run","Hold the handrail","Use your phone","Carry big loads"],1]],
  discussion:"Where is the floor always wet in our area, and why?"
 }
}
];
