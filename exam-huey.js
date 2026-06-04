const QUESTION_POOL = [
  {
    question: "When loading a Huey for transport operations, the center of gravity must:",
    answers: ["Remain within the approved CG envelope throughout the flight", "Be as far forward as possible", "Be adjusted during flight with fuel burn", "Not be calculated if weight is under max gross"],
    correct: 0,
    explanation: "The CG must remain within the approved envelope at all times. An out-of-limit CG can make the aircraft uncontrollable, especially in hover. Forward CG limits forward cyclic authority; aft CG limits aft cyclic and can cause loss of control."
  },
  {
    question: "During a Huey formation flight, the trail aircraft should maintain position by:",
    answers: ["Visual reference and anticipating lead's movements", "GPS autopilot coupling", "Following fixed distance separation", "Radio altitude calls only"],
    correct: 0,
    explanation: "Formation flight requires constant visual reference to the lead aircraft, anticipating their control inputs, and making smooth corrections to maintain proper position. Trail aircraft must stay alert for sudden maneuvers and adjust formation spacing based on visibility and tactical situation."
  },
  {
    question: "What is the maximum allowable gross weight limitation for a Huey?",
    answers: ["A structural limit that must never be exceeded", "A suggested guideline only", "Only applies to commercial operations", "Can be exceeded with instructor authorization"],
    correct: 0,
    explanation: "Maximum gross weight is a structural certification limit. Exceeding it risks structural failure, degraded performance beyond calculated limits, and potential catastrophic failure of transmission, rotor system, or airframe components."
  },
  {
    question: "In a Huey conducting troop transport, the crew chief's primary responsibility is:",
    answers: ["Coordinating passenger loading/offloading and monitoring cargo security", "Operating the radios", "Flying the aircraft from the cabin", "Performing maintenance during flight"],
    correct: 0,
    explanation: "The crew chief manages passenger/cargo operations, ensures proper loading and securing, monitors troops during flight, directs loading zone operations, and serves as an additional set of eyes for obstacles and threats during low-level operations."
  },
  {
    question: "When calculating a Huey's hover ceiling, you must account for:",
    answers: ["Gross weight, density altitude, and wind conditions", "Only aircraft weight", "Only altitude above sea level", "Only outside air temperature"],
    correct: 0,
    explanation: "Hover ceiling is determined by the power available versus power required, which depends on gross weight (heavier requires more power), density altitude (high DA reduces available power and rotor efficiency), and wind (headwind aids hovering)."
  },
  {
    question: "During a Huey external load operation using a cargo hook, the load should be released if:",
    answers: ["It begins to oscillate uncontrollably or creates a flight hazard", "The mission is complete", "Radio communication is lost", "The fuel quantity reaches reserves"],
    correct: 0,
    explanation: "Uncontrolled load oscillation can create excessive forces on the airframe, disrupt flight control, or cause structural damage. If the load becomes unstable and cannot be controlled, immediate jettison via the cargo hook release is required for flight safety."
  },
  {
    question: "What is the primary consideration when landing a Huey in a dust/brownout environment?",
    answers: ["Reduced visual references requiring smooth, controlled descent with constant attitude", "Increasing descent rate to minimize time in dust cloud", "Aborting the landing immediately", "Landing only with full visibility"],
    correct: 0,
    explanation: "Brownout landings require establishing a stabilized descent before entering the dust cloud, maintaining constant attitude and descent rate via instruments and minimal visual cues, and being prepared to execute a go-around if visual references are completely lost."
  },
  {
    question: "In a Huey, what is the purpose of the stability augmentation system (SAS)?",
    answers: ["Dampens unwanted aircraft movements and reduces pilot workload", "Automatically maintains altitude", "Prevents overspeed conditions", "Controls engine RPM"],
    correct: 0,
    explanation: "The SAS uses gyros and servos to dampen pitch, roll, and yaw oscillations, improving stability and reducing the pilot workload required to maintain precise control, especially beneficial in turbulence or during tactical maneuvering."
  },
  {
    question: "During a maximum performance takeoff in a Huey, the pilot should:",
    answers: ["Use maximum power and climb at best rate-of-climb airspeed", "Use minimum power to conserve fuel", "Climb at cruise airspeed", "Delay climb until reaching translational lift"],
    correct: 0,
    explanation: "Maximum performance takeoffs use maximum available power to achieve steepest climb gradient, clearing obstacles in minimum distance. After clearing obstacles, transition to best rate-of-climb airspeed (Vy) for optimal climb performance."
  },
  {
    question: "What is the correct procedure for a Huey experiencing hydraulic failure?",
    answers: ["Maintain cruise flight, avoid abrupt control inputs, land as soon as practical", "Enter autorotation immediately", "Increase airspeed to maximum", "Continue normal operations"],
    correct: 0,
    explanation: "Hydraulic failure dramatically increases control forces. Maintain smooth flight, avoid aggressive maneuvers that require high control forces, reduce airspeed for landing, and execute a running landing if possible to minimize control inputs during touchdown."
  },
  {
    question: "In a Huey formation, what is the minimum safe separation between aircraft?",
    answers: ["Sufficient to allow safe maneuvering and avoid rotor wash interference", "Exactly 100 feet", "Rotor tip to rotor tip", "No minimum if both pilots are qualified"],
    correct: 0,
    explanation: "Formation separation must allow safe maneuvering room while avoiding downwash from lead aircraft affecting trail aircraft performance. Actual distances vary with weather, visibility, and tactical situation, but must always permit safe reaction to sudden maneuvers."
  },
  {
    question: "When a Huey is operating at high gross weight and high density altitude, the pilot should expect:",
    answers: ["Degraded climb performance and possible inability to hover out of ground effect", "Improved performance due to reduced drag", "No change in handling characteristics", "Better fuel economy"],
    correct: 0,
    explanation: "The combination of heavy weight (high power required) and high density altitude (low power available) creates minimum performance margins. The aircraft may only hover in ground effect, with little to no climb capability and extended takeoff distances required."
  },
  {
    question: "What is the primary purpose of a pre-landing cargo check in a Huey?",
    answers: ["Ensure all cargo is properly secured to prevent shifting during landing", "Verify fuel quantity", "Check passenger count", "Test radio equipment"],
    correct: 0,
    explanation: "Unsecured cargo can shift during landing, causing sudden CG changes that can make the aircraft uncontrollable. The crew chief must verify all cargo is properly tied down and personnel are seated and secured before landing."
  },
  {
    question: "In a Huey, retreating blade stall is indicated by:",
    answers: ["Abnormal vibration, nose pitch up, and loss of lateral control effectiveness", "Smooth flight with gradual altitude loss", "Decrease in rotor RPM only", "Increase in engine temperature"],
    correct: 0,
    explanation: "Retreating blade stall causes vibration as the stalled blade loses lift, nose pitch up as the advancing blade generates disproportionate lift, and degraded lateral cyclic effectiveness as the retreating blade can no longer respond normally to pitch changes."
  },
  {
    question: "What is the purpose of conducting a Huey crew coordination brief before flight?",
    answers: ["Ensure all crew members understand roles, responsibilities, and emergency procedures", "Satisfy administrative requirements only", "Check weather conditions", "Verify aircraft maintenance status"],
    correct: 0,
    explanation: "Crew coordination briefs establish clear communication, assign responsibilities (pilot flying, pilot not flying, crew chief duties), review emergency procedures, discuss mission specifics, and ensure all crew members understand the tactical plan and their roles."
  },
  {
    question: "During a Huey's approach to a confined landing zone, the pilot should:",
    answers: ["Maintain a steep approach angle while retaining abort capability until committed", "Use a shallow approach regardless of obstacles", "Circle the LZ multiple times", "Land immediately upon visual contact"],
    correct: 0,
    explanation: "Confined area approaches require steep angles to clear obstacles but must maintain escape capability until reaching the 'go/no-go' decision point. The pilot must balance obstacle clearance with maintaining power and airspeed for a safe abort."
  },
  {
    question: "What is the effect of forward CG on a Huey's handling characteristics?",
    answers: ["Requires more aft cyclic to maintain level flight, limits aft cyclic authority", "Improves all-around handling", "No effect on cyclic positions", "Only affects hover, not forward flight"],
    correct: 0,
    explanation: "Forward CG creates a nose-down pitching moment requiring constant aft cyclic to maintain level flight. This reduces available aft cyclic for flare or nose-up maneuvers, potentially limiting the ability to arrest descent during landing or perform aggressive pullouts."
  },
  {
    question: "In a Huey multi-ship formation, the flight lead's responsibility is to:",
    answers: ["Maintain safe flight path, avoid obstacles, and provide smooth predictable flight", "Fly as fast as possible", "Navigate via GPS only", "Communicate constantly on all frequencies"],
    correct: 0,
    explanation: "Lead aircraft sets the pace, navigates, clears obstacles, and provides smooth, predictable flight that wingmen can follow. Abrupt maneuvers endanger formation integrity. Lead must maintain situational awareness while considering the capabilities of trail aircraft."
  },
  {
    question: "What is the primary concern when conducting a Huey pinnacle landing?",
    answers: ["Updrafts/downdrafts creating control difficulties and limited escape options", "Excessive fuel consumption", "Radio communication range", "Engine cooling problems"],
    correct: 0,
    explanation: "Pinnacle operations face unpredictable wind currents, limited maneuvering space, potential for one-skid landings, and restricted abort options. Downdrafts on the leeward side can cause sudden settling, while updrafts can cause uncommanded climbs requiring immediate correction."
  },
  {
    question: "During a Huey external load operation, what is the maximum safe wind speed for flight?",
    answers: ["Determined by load stability and pilot ability to maintain control", "Unlimited in all conditions", "10 knots maximum", "50 knots in all cases"],
    correct: 0,
    explanation: "Wind limits for external loads depend on load characteristics (size, shape, weight), suspension system, and pilot proficiency. Loads can become unstable in wind, creating control problems. The pilot must assess each situation and abort if the load becomes unmanageable."
  },
  {
    question: "What is the correct response to an engine failure in a Huey during cruise flight?",
    answers: ["Enter autorotation, lower collective, maintain rotor RPM, identify landing area", "Increase collective to maintain altitude", "Turn back to departure point immediately", "Shut down all systems"],
    correct: 0,
    explanation: "Engine failure requires immediate autorotation entry - lower collective to maintain rotor RPM in the green arc, establish best glide airspeed, turn into the wind if able, and identify a suitable landing area while managing the autorotation to touchdown."
  },
  {
    question: "In a Huey, what is the purpose of the anti-torque system?",
    answers: ["Counteract main rotor torque and provide directional control", "Increase forward speed", "Reduce fuel consumption", "Cool the engine"],
    correct: 0,
    explanation: "The tail rotor produces thrust perpendicular to the tail boom, counteracting the torque reaction from the main rotor trying to spin the fuselage opposite to rotor rotation. This provides yaw control and allows the pilot to maintain or change heading."
  },
  {
    question: "When calculating fuel requirements for a Huey mission, the pilot must account for:",
    answers: ["Planned fuel, reserve fuel, alternate fuel, and contingency fuel", "Only fuel required to reach destination", "A fixed 30-minute reserve only", "Maximum fuel capacity regardless of mission length"],
    correct: 0,
    explanation: "Proper fuel planning includes: fuel to destination, fuel to alternate landing site, reserve fuel (typically 20-30 minutes), and contingency fuel for weather, higher-than-planned fuel burn, or tactical delays. Running out of fuel eliminates all options."
  },
  {
    question: "What is the primary indication of mast bumping in a Huey?",
    answers: ["Severe vibration and possible catastrophic rotor system failure", "Gradual loss of altitude", "Increase in engine noise", "Loss of tail rotor effectiveness"],
    correct: 0,
    explanation: "Mast bumping occurs when the rotor hub strikes the mast due to excessive flapping, typically from low-G maneuvers or abrupt control inputs in semi-rigid rotor systems. This causes catastrophic vibration and potential separation of the rotor system from the aircraft."
  },
  {
    question: "During a Huey rapid deceleration, the pilot must be aware of:",
    answers: ["Tail rotor strike risk as the tail rises with aft cyclic", "Increased fuel consumption", "Loss of engine power", "Automatic activation of SAS"],
    correct: 0,
    explanation: "Aggressive deceleration requires significant aft cyclic, which raises the tail boom. Excessive aft cyclic or too rapid deceleration can raise the tail into the main rotor disc, causing tail rotor strike and catastrophic damage."
  },
  {
    question: "What is the purpose of establishing a Huey landing zone approach brief?",
    answers: ["Coordinate crew actions, identify hazards, and plan abort procedures", "Satisfy administrative requirements", "Communicate with ground units only", "Calculate fuel burn"],
    correct: 0,
    explanation: "LZ approach briefs ensure crew coordination, identify obstacles and hazards (wires, terrain, threats), establish abort procedures and alternate LZs, assign crew member responsibilities, and create shared situational awareness for the approach and landing."
  },
  {
    question: "In a Huey experiencing a tail rotor failure, the correct immediate action is:",
    answers: ["Enter autorotation and maintain forward airspeed until landing", "Attempt to hover and troubleshoot", "Increase power to maximum", "Continue normal flight to destination"],
    correct: 0,
    explanation: "Tail rotor failure eliminates directional control in hover and low-speed flight. Immediate autorotation maintains forward airspeed where the vertical fin provides directional stability. Execute a running landing maintaining forward speed throughout to prevent uncontrolled spin."
  },
  {
    question: "What is the effect of high-density altitude on a Huey's transmission and engine?",
    answers: ["Reduced power output and increased operating temperatures", "Increased power output and cooler operation", "No effect on performance", "Improved fuel economy"],
    correct: 0,
    explanation: "High density altitude reduces air density, decreasing engine power output while simultaneously increasing engine and transmission operating temperatures due to reduced cooling efficiency. This combination significantly degrades performance and may require power limitations to prevent overheating."
  },
  {
    question: "During a Huey tactical formation approach, radio discipline requires:",
    answers: ["Brief, clear communications with minimal non-essential transmissions", "Continuous running commentary", "Complete radio silence", "Communications only in emergencies"],
    correct: 0,
    explanation: "Tactical radio discipline demands brief, clear, essential communications only. Excessive transmissions create frequency congestion, mask critical calls, increase enemy intercept risk, and distract crews. Standard hand signals and preplanned actions minimize required radio use."
  },
  {
    question: "What is the primary concern when operating a Huey in brownout conditions?",
    answers: ["Loss of visual references leading to spatial disorientation and hard landings", "Engine ingestion of foreign objects only", "Increased fuel consumption", "Radio interference"],
    correct: 0,
    explanation: "Brownout creates complete loss of external visual references, leading to spatial disorientation. Pilots lose horizon, depth perception, and closure rate information, easily resulting in hard landings, loss of control, or flight into terrain. Instrument cross-check is critical."
  },
  {
    question: "In a Huey, what is the purpose of the fuel management system?",
    answers: ["Ensure balanced fuel distribution and prevent CG shift", "Maximize fuel capacity", "Cool the engines", "Filter impurities only"],
    correct: 0,
    explanation: "Fuel management ensures fuel is used from tanks in a sequence that maintains CG within limits. As fuel burns, weight and CG shift. Improper fuel management can move CG out of limits, creating control problems, especially in hover."
  },
  {
    question: "What is the correct procedure for a Huey experiencing a chip detector warning?",
    answers: ["Land as soon as practical and shutdown to prevent catastrophic failure", "Continue flight and monitor", "Increase cruise speed", "Ignore if other parameters are normal"],
    correct: 0,
    explanation: "Chip detector warnings indicate metal particles in the oil system, suggesting transmission or engine bearing failure. Continued operation risks catastrophic mechanical failure. Land immediately at the nearest suitable site and shutdown to prevent complete destruction of the affected component."
  },
  {
    question: "During a Huey confined area takeoff, the pilot should:",
    answers: ["Accelerate in ground effect to translational lift before climbing", "Climb vertically to clear obstacles", "Use minimum power to reduce noise", "Delay takeoff until winds calm"],
    correct: 0,
    explanation: "Confined area takeoffs maximize performance by accelerating in ground effect (reduced power required) to translational lift speed before initiating climb. This technique provides more airspeed and energy for obstacle clearance than a vertical climb."
  },
  {
    question: "What is the primary purpose of a Huey's power assurance check?",
    answers: ["Verify engine performance meets requirements for planned gross weight and conditions", "Test starter motor", "Check fuel pump operation", "Warm up hydraulics"],
    correct: 0,
    explanation: "Power assurance checks verify the engine can produce required power (torque/manifold pressure) at current density altitude. This confirms adequate power for the planned gross weight, preventing takeoff attempts that exceed available performance."
  },
  {
    question: "In a Huey formation, what is the wingman's primary responsibility?",
    answers: ["Maintain position on lead while monitoring for threats and obstacles", "Navigate the flight", "Communicate with ground control", "Lead the formation"],
    correct: 0,
    explanation: "Wingmen maintain formation position, clear lead's flight path for obstacles and threats, maintain radio watch, and be prepared to assume lead if required. They must balance formation maintenance with aggressive lookout and situational awareness."
  },
  {
    question: "What is the effect of aft CG on a Huey's control characteristics?",
    answers: ["Reduced longitudinal stability and less forward cyclic required for level flight", "Improved stability in all axes", "No effect on handling", "Increased fuel consumption only"],
    correct: 0,
    explanation: "Aft CG reduces longitudinal stability, making the aircraft more sensitive to pitch inputs. It requires less forward cyclic to maintain level flight but limits forward cyclic authority available for nose-down maneuvering, making steep approaches and aggressive flares more difficult."
  },
  {
    question: "During a Huey night formation flight, the pilot should:",
    answers: ["Use lead's position lights for reference and maintain increased spacing", "Fly using instruments only", "Close formation spacing for better visibility", "Avoid all formation flight at night"],
    correct: 0,
    explanation: "Night formation requires increased spacing for safety, reliance on lead's position lights for reference, and heightened instrument cross-check. Depth perception is degraded, making precise formation keeping more difficult and dangerous without proper spacing."
  },
  {
    question: "What is the purpose of conducting a Huey hover power check before departure?",
    answers: ["Verify sufficient power margin exists for takeoff and climb", "Test radio communications", "Check crew coordination", "Warm up transmission oil"],
    correct: 0,
    explanation: "Hover power checks confirm the aircraft can hover at current weight and density altitude with adequate power margin remaining for takeoff, climb, and maneuvering. Insufficient power margin indicates the need to reduce weight or wait for better conditions."
  },
  {
    question: "In a Huey experiencing a hydraulic malfunction, the pilot should expect:",
    answers: ["Significantly increased control forces requiring both hands on the cyclic", "No change in control forces", "Automatic reversion to autopilot", "Complete loss of control"],
    correct: 0,
    explanation: "Hydraulic boost failure results in dramatically increased control forces - often requiring both hands on the cyclic and reduced airspeed for landing. Control is maintained but requires significant physical effort, making precision maneuvering difficult."
  },
  {
    question: "What is the primary consideration for a Huey operating in high crosswind conditions?",
    answers: ["Maintaining directional control during hover taxi and preventing dynamic rollover", "Fuel consumption increase", "Engine cooling problems", "Radio communication difficulties"],
    correct: 0,
    explanation: "High crosswinds create lateral drift during hover requiring significant cyclic correction, tail rotor effectiveness changes with wind direction, and dynamic rollover risk increases if a skid catches during lateral drift. Hover taxi technique becomes critical for safety."
  },
  {
    question: "During a Huey autorotation, what is the purpose of the flare?",
    answers: ["Convert forward airspeed to rotor RPM and reduce rate of descent", "Increase forward speed", "Reduce rotor RPM", "Align with the wind"],
    correct: 0,
    explanation: "The flare (aft cyclic) trades forward airspeed for increased upward airflow through the rotor disc, increasing rotor RPM and storing energy. This energy is used during the final collective application to cushion touchdown, converting rotor energy to lift."
  },
  {
    question: "What is the correct action if a Huey begins to settle during a no-wind hover?",
    answers: ["Increase collective to arrest descent and assess power available", "Decrease collective to reduce power required", "Apply forward cyclic only", "Shut down and land immediately"],
    correct: 0,
    explanation: "Settling in a hover indicates insufficient power or approaching vortex ring state. Increase collective to arrest descent while monitoring power margins. If at power limits, reducing gross weight or moving into translational lift may be required."
  },
  {
    question: "In a Huey, what is the purpose of the engine-out training profile?",
    answers: ["Develop proficiency in autorotation and emergency landing procedures", "Practice single-engine cruise flight", "Test engine restart procedures", "Verify fuel pump backup systems"],
    correct: 0,
    explanation: "Engine-out training develops critical skills for recognizing engine failure, entering autorotation, managing rotor energy, selecting landing sites, and executing autorotative landings. These skills are perishable and require regular practice to maintain proficiency."
  },
  {
    question: "What is the effect of loading passengers in a Huey's aft cabin area only?",
    answers: ["Creates aft CG potentially exceeding limits and reducing control authority", "Improves aircraft performance", "No effect if under max gross weight", "Only affects fuel consumption"],
    correct: 0,
    explanation: "Concentrated aft loading moves CG aftward, potentially exceeding aft CG limits. This reduces longitudinal stability and forward cyclic authority, making nose-down maneuvers difficult and potentially creating an uncontrollable condition, especially in hover."
  },
  {
    question: "During a Huey's emergency landing, the pilot's priorities should be:",
    answers: ["Maintain aircraft control, protect crew and passengers, preserve aircraft if possible", "Save the aircraft at all costs", "Complete all checklists before landing", "Communicate position before taking action"],
    correct: 0,
    explanation: "Emergency landing priorities: maintain control (controlled crash is survivable), protect occupants (minimize vertical and lateral forces), communicate if time permits, and preserve aircraft last. Human life always takes priority over equipment."
  },
  {
    question: "What is the primary concern when conducting Huey operations near mountains?",
    answers: ["Unpredictable wind currents, downdrafts, and reduced performance at altitude", "Improved fuel efficiency", "Enhanced radio communication", "Better visibility"],
    correct: 0,
    explanation: "Mountain operations combine high density altitude (reduced performance), unpredictable winds (mountain waves, updrafts, downdrafts, rotors), terrain masking visual references, and limited forced landing options. All require careful planning and conservative performance margins."
  },
  {
    question: "In a Huey multi-ship landing zone operation, what is the primary coordination requirement?",
    answers: ["Precise timing and spacing to prevent rotor wash interference and collisions", "Radio communication only", "GPS navigation accuracy", "Landing in numerical order only"],
    correct: 0,
    explanation: "Multi-ship LZ operations require precise spacing (avoiding downwash from preceding aircraft), timing coordination (preventing simultaneous approaches), clear communication, and crew coordination to manage multiple aircraft in confined space safely."
  },
  {
    question: "What is the purpose of a Huey's rotor brake system?",
    answers: ["Stop rotor rotation after shutdown to reduce ground time and prevent FOD", "Slow rotor RPM during flight", "Engage during autorotation", "Provide emergency stopping during flight"],
    correct: 0,
    explanation: "The rotor brake stops rotor rotation after engine shutdown, reducing time before passengers can deplane safely and minimizing FOD risk from rotor-generated windblast. It is never used during flight or with the engine running."
  },
  {
    question: "During a Huey tactical descent, the pilot should:",
    answers: ["Maintain situational awareness while managing rate of descent and airspeed", "Descend at maximum rate regardless of control", "Focus solely on instruments", "Ignore obstacle clearance"],
    correct: 0,
    explanation: "Tactical descents require balancing rapid descent with aircraft control, maintaining obstacle clearance, monitoring airspeed and rate of descent limits, and maintaining crew coordination. Excessive descent rates can lead to vortex ring state or overstress."
  },
  {
    question: "What is the primary limitation when conducting Huey operations from elevated platforms?",
    answers: ["Reduced ground effect benefit requiring more power to hover", "Improved performance in all conditions", "Unlimited weight capacity", "No operational limitations"],
    correct: 0,
    explanation: "Elevated platform operations lose ground effect benefit, requiring significantly more power to hover than at ground level. Combined with obstacle clearance challenges and difficult approaches, elevated operations demand higher power margins and careful performance planning."
  },
  {
    question: "In a Huey experiencing an electrical failure, the pilot should:",
    answers: ["Shed non-essential electrical loads and land as soon as practical", "Continue normal operations indefinitely", "Increase power to recharge batteries", "Shut down all systems immediately"],
    correct: 0,
    explanation: "Electrical failure eliminates or degrades navigation, communication, and instrumentation. Shed non-essential loads to preserve battery power for critical systems, navigate visually, and land as soon as practical before complete battery depletion eliminates all electrical systems."
  },
  {
    question: "What is the effect of operating a Huey at maximum continuous power for extended periods?",
    answers: ["Increased engine and transmission temperatures potentially requiring power reduction", "Improved fuel economy", "Enhanced performance with no limitations", "Automatic power reduction by governor"],
    correct: 0,
    explanation: "Maximum continuous power generates maximum heat in engine and transmission. Extended operation can exceed temperature limits requiring power reduction to prevent damage. Monitor temperature gauges and be prepared to reduce power to protect components."
  },
  {
    question: "During a Huey formation breakup, the correct procedure is:",
    answers: ["Execute briefed breakup maneuver with clear interval and altitude deconfliction", "Turn immediately without coordination", "Climb vertically to separate", "Maintain formation until landing"],
    correct: 0,
    explanation: "Formation breakups require precise execution of briefed maneuvers with proper interval timing and altitude separation to prevent mid-air collision. Each aircraft must follow the briefed pattern and maintain visual contact until safely separated."
  },
  {
    question: "What is the primary purpose of a Huey's vibration analysis system?",
    answers: ["Monitor rotor track and balance to prevent excessive vibration and component wear", "Measure passenger comfort only", "Calculate fuel consumption", "Determine wind speed"],
    correct: 0,
    explanation: "Vibration analysis detects rotor out-of-track or out-of-balance conditions that cause excessive vibration, leading to component fatigue, structural damage, and reduced service life. Early detection allows corrective maintenance before catastrophic failure."
  },
  {
    question: "In a Huey conducting a maximum range flight, the pilot should:",
    answers: ["Fly at best range airspeed with optimal power settings and altitude", "Fly at maximum speed", "Fly at minimum altitude", "Vary speed constantly"],
    correct: 0,
    explanation: "Maximum range requires flying at best range airspeed (typically around 90-110 knots for most utility helicopters), optimal altitude for conditions (balancing headwinds and power required), and conservative power settings, minimizing unnecessary maneuvering."
  },
  {
    question: "What is the correct procedure for a Huey pilot experiencing a runaway trim condition?",
    answers: ["Disengage the trim system and revert to manual control", "Increase trim input to counter", "Shut down all electrical systems", "Continue flight with increased control forces"],
    correct: 0,
    explanation: "Runaway trim creates uncommanded control inputs. Immediately disengage the trim system (usually via switch or circuit breaker), revert to manual flight control, and land as soon as practical. Do not re-engage trim - the malfunction may recur."
  },
  {
    question: "During Huey slope operations, what is the maximum recommended slope angle?",
    answers: ["Generally 5-10 degrees depending on surface and aircraft variant", "45 degrees in all conditions", "Unlimited if pilot is experienced", "Only flat surfaces are authorized"],
    correct: 0,
    explanation: "Most helicopters limit slope operations to 5-10 degrees depending on aircraft, surface conditions, and wind. Steeper slopes increase dynamic rollover risk, require excessive lateral cyclic (reducing available control margin), and can overstress landing gear."
  },
  {
    question: "What is the purpose of conducting a Huey aircraft weight and balance calculation?",
    answers: ["Ensure CG remains within limits and aircraft performance is predictable", "Satisfy administrative paperwork only", "Calculate fuel cost", "Determine passenger seating only"],
    correct: 0,
    explanation: "Weight and balance ensures the aircraft is within weight limits (structure) and CG envelope (controllability). Out-of-limits operation can make the aircraft uncontrollable, unpredictable, or cause structural failure. Every flight requires accurate W&B."
  },
  {
    question: "In a Huey, what is the primary indicator of impending vortex ring state?",
    answers: ["High descent rate with low forward speed and increasing vibration despite power", "Smooth descent with no warnings", "Increase in engine RPM", "Improvement in control response"],
    correct: 0,
    explanation: "VRS warning signs include: high sink rate (typically >300 fpm) with low airspeed, increasing vibration, ineffective power application (adding power doesn't arrest descent), and mushy control response as the rotor operates in recirculated air."
  },
  {
    question: "What is the correct action if a Huey's rotor RPM decays below the green arc during flight?",
    answers: ["Immediately lower collective to reduce rotor drag and restore RPM", "Increase collective to climb", "Reduce throttle", "Maintain current collective position"],
    correct: 0,
    explanation: "Low rotor RPM is critical - insufficient for lift or control authority. Immediately lower collective to reduce blade drag, add throttle if not already at maximum, and restore RPM to green arc before attempting other maneuvers. Low RPM risks settling and loss of control."
  },
  {
    question: "During a Huey's tactical insertion, the crew chief's primary role during approach is:",
    answers: ["Clear obstacles, call clearances, and prepare passengers for rapid exit", "Operate the radio", "Monitor fuel quantity", "Navigate the flight"],
    correct: 0,
    explanation: "Crew chiefs provide crucial obstacle clearance calls (wires, trees, terrain), monitor cabin area and passenger status, prepare for rapid off-load, and serve as additional eyes clearing the approach path the pilots cannot see from the cockpit."
  },
  {
    question: "What is the effect of high-speed cruise flight on a Huey's fuel consumption?",
    answers: ["Significantly increased fuel burn compared to best range airspeed", "Improved fuel economy", "No effect on consumption", "Reduced fuel burn due to reduced time"],
    correct: 0,
    explanation: "High-speed cruise dramatically increases power required (overcoming induced and parasitic drag), resulting in much higher fuel consumption. Best range airspeed provides optimal fuel efficiency; speeds significantly above this waste fuel despite reducing flight time."
  },
  {
    question: "In a Huey experiencing an alternator failure, the primary concern is:",
    answers: ["Battery depletion eliminating all electrical systems within limited time", "Engine failure", "Loss of hydraulic power", "Rotor overspeed"],
    correct: 0,
    explanation: "Alternator failure means battery power is finite - no recharging occurs. All electrical systems (radios, instruments, lighting) will fail when battery depletes. Shed non-essential loads immediately and land within battery life (typically 20-30 minutes)."
  },
  {
    question: "What is the primary purpose of Huey crew resource management (CRM) training?",
    answers: ["Improve communication, decision-making, and crew coordination to reduce errors", "Teach maintenance procedures", "Practice formation flying only", "Satisfy administrative requirements"],
    correct: 0,
    explanation: "CRM emphasizes effective communication, shared decision-making, workload distribution, assertiveness when necessary, and error recognition/mitigation. Most accidents involve crew coordination failures rather than individual pilot skill deficiencies."
  },
  {
    question: "During a Huey pinnacle approach, what is the correct technique if encountering downdrafts?",
    answers: ["Add power to counter and consider aborting if sink rate becomes excessive", "Reduce power and descend", "Continue approach without power changes", "Enter autorotation immediately"],
    correct: 0,
    explanation: "Downdrafts create sudden sink and can lead to vortex ring state. Add power to counter the descent, but if sink rate is excessive or power limits are reached, immediately abort the approach and move away from the downdraft area before attempting another approach."
  }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initExam() {
  currentQuestions = shuffleArray(QUESTION_POOL).slice(0, 30);
  
  // Shuffle answers for each question
  currentQuestions.forEach(q => {
    const correctAnswer = q.answers[q.correct];
    const shuffled = shuffleArray(q.answers.map((ans, idx) => ({ ans, idx })));
    q.answers = shuffled.map(item => item.ans);
    q.correct = shuffled.findIndex(item => item.idx === q.correct);
  });
  
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  displayQuestion();
}

function displayQuestion() {
  const container = document.getElementById('question-container');
  const question = currentQuestions[currentQuestionIndex];
  
  answered = false;
  
  container.innerHTML = `
    <div class="question-card">
      <div class="question-number">Question ${currentQuestionIndex + 1} of 30</div>
      <div class="question-text">${question.question}</div>
      <div class="answers" id="answers"></div>
      <div id="explanation-container"></div>
      <button class="btn next-btn hidden" id="next-btn" onclick="nextQuestion()">NEXT QUESTION</button>
    </div>
  `;
  
  const answersContainer = document.getElementById('answers');
  question.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersContainer.appendChild(btn);
  });
  
  updateProgress();
}

function checkAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    const question = currentQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    const explanationContainer = document.getElementById('explanation-container');

    answerButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === question.correct) {
        score++;
        answerButtons[selectedIndex].classList.add('correct');
    } else {
        answerButtons[selectedIndex].classList.add('incorrect');
        answerButtons[question.correct].classList.add('correct');
    }

    explanationContainer.innerHTML = `
    <div class="explanation">
      <strong>EXPLANATION:</strong> ${question.explanation}
    </div>
  `;

    document.getElementById('next-btn').classList.remove('hidden');
    updateProgress();
}

function updateProgress() {
    document.getElementById('current-q').textContent = currentQuestionIndex + 1;
    document.getElementById('score').textContent = score;
    const percentage = ((score / (currentQuestionIndex + (answered ? 1 : 0))) * 100).toFixed(0);
    document.getElementById('percentage').textContent = percentage + '%';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
    } else {
        displayQuestion();
    }
}

function showResults() {
    const container = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const formContainer = document.getElementById('form-container');

    container.classList.add('hidden');
    document.getElementById('exam-progress').classList.add('hidden');
    resultContainer.classList.remove('hidden');

    const percentage = ((score / 30) * 100).toFixed(1);
    const passed = score >= 27; // 90% of 30 is 27

    resultContainer.innerHTML = `
    <div class="result-screen ${passed ? 'pass' : 'fail'}">
      <div class="result-status">${passed ? 'PASS' : 'FAIL'}</div>
      <div class="result-score">${score} / 30 (${percentage}%)</div>
      <div class="result-message">
        ${passed
            ? 'You have passed the Little Bird written examination. Complete the form below to schedule your in-game practical check ride with an instructor.'
            : 'You did not achieve the required 90% passing score. Review the material and retake the examination.'}
      </div>
      ${!passed ? '<button class="btn" onclick="location.reload()">RETAKE EXAM</button>' : ''}
    </div>
  `;

    if (passed) {
        formContainer.classList.remove('hidden');
        formContainer.innerHTML = `
      <div class="form-container">
        <h2>POST-EXAM CERTIFICATION FORM</h2>
        <p>Your written exam results will be forwarded to the instructor cadre. Complete this form to begin the practical scheduling process.</p>
        
        <form id="cert-form">
          <div class="form-group">
            <label for="discord">DISCORD USERNAME *</label>
            <input type="text" id="discord" required placeholder="username#0000">
          </div>
          
          <div class="form-group">
            <label for="callsign">IN-GAME CALLSIGN *</label>
            <input type="text" id="callsign" required placeholder="Your tactical callsign">
          </div>
          
          <div class="form-group">
            <label for="availability">AVAILABILITY / TIMEZONE *</label>
            <textarea id="availability" required placeholder="Preferred days/times and timezone (e.g., Weekends 1800-2200 UTC, Mon-Fri after 2000 EST)"></textarea>
          </div>
          
          <button type="submit" class="btn">SUBMIT CERTIFICATION REQUEST</button>
        </form>
        
        <div id="form-response" class="hidden"></div>
      </div>
    `;

        document.getElementById('cert-form').addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Your real Discord Webhook URL
    const REAL_DISCORD_URL = 'https://discord.com/api/webhooks/1511883347339644989/RCYLZuwBDp-xLC1xG_rUR97CRZgmXI8S4JhGxkujap_SDi0mTTprmgA17aFbCcs3oDiW';

    // Wrap with CorsProxy.io to bypass browser extensions and CORS headers cleanly
    const PROXIED_URL = 'https://corsproxy.io/?url=' + encodeURIComponent(REAL_DISCORD_URL);

    const formResponse = document.getElementById('form-response');
    formResponse.classList.remove('hidden');
    formResponse.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>TRANSMITTING TO INSTRUCTOR CADRE...</p>
    </div>
  `;

    // Get form values
    const discordUser = document.getElementById('discord').value;
    const callsignUser = document.getElementById('callsign').value;
    const availabilityUser = document.getElementById('availability').value;

    // Automatically detect which exam they completed based on page URL
    const examType = window.location.pathname.includes('huey') ? 'UH-1H Huey' : 'MH-6 Little Bird';
    const percentage = ((score / 30) * 100).toFixed(1);

    // Format a tactical Discord embed payload
    const discordPayload = {
        username: "Wardogs Flight Command",
        embeds: [
            {
                title: "🚨 NEW PILOT LICENSING APPLICATION 🚨",
                description: "A candidate has successfully passed the written examination and is ready for a practical evaluation.",
                color: 16763904, // Tactical Amber/Yellow in decimal
                fields: [
                    {
                        name: "👤 Candidate Details",
                        value: `**Discord:** ${discordUser}\n**Callsign:** ${callsignUser}`,
                        inline: false
                    },
                    {
                        name: "🛸 Exam Performance",
                        value: `**Aircraft Track:** ${examType}\n**Score:** ${score} / 30 (${percentage}%)`,
                        inline: false
                    },
                    {
                        name: "📅 Availability & Timezone",
                        value: availabilityUser,
                        inline: false
                    }
                ],
                footer: {
                    text: "Wardogs Unofficial Flight Academy • Remember the rules: Crash = Fail"
                },
                timestamp: new Date().toISOString()
            }
        ]
    };

    // Perform the network request through the CORS proxy
    fetch(PROXIED_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(discordPayload)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to transmit application to Discord.');
            }

            // Show success message once the request is complete
            formResponse.innerHTML = `
      <div class="success-message">
        <h3 style="color: var(--tactical-yellow); margin-bottom: 20px;">✓ TRANSMISSION SUCCESSFUL</h3>
        <p>Your written exam results have been registered. Stand by for contact via Discord to schedule your in-game practical check ride.</p>
        <p style="margin-top: 20px; color: var(--tactical-red); font-weight: 700;">REMEMBER THE RULES:</p>
        <p style="color: var(--tactical-red);">If you crash, you fail.</p>
        <p style="color: var(--tactical-red);">If you are too slow, you fail.</p>
        <p style="margin-top: 20px;">Precision and speed are mandatory. Good luck, pilot.</p>
      </div>
    `;

            document.getElementById('cert-form').style.display = 'none';
        })
        .catch(error => {
            console.error('Error submitting application:', error);

            // Fallback if the request fails
            formResponse.innerHTML = `
      <div class="success-message" style="border-color: var(--tactical-red);">
        <h3 style="color: var(--tactical-red); margin-bottom: 20px;">⚠️ TRANSMISSION ERROR</h3>
        <p>There was a connection issue forwarding your application to our database. Please take a screenshot of your passing score (${score}/30) and contact an instructor directly on Discord.</p>
      </div>
    `;
        });
}

initExam();