const QUESTION_POOL = [
  {
    question: "During a high-speed low-level pass in a Little Bird, what is the primary aerodynamic concern?",
    answers: ["Retreating blade stall", "Ground effect interference", "Vortex ring state", "Translational lift loss"],
    correct: 0,
    explanation: "At high forward speeds, the retreating blade experiences reduced relative wind velocity and can stall if the aircraft exceeds VNE or performs aggressive maneuvers, causing loss of lift asymmetry and potential control problems."
  },
  {
    question: "What is the maximum demonstrated crosswind component for a typical Little Bird during landing operations?",
    answers: ["15 knots", "25 knots", "35 knots", "45 knots"],
    correct: 1,
    explanation: "Most light helicopters have a demonstrated crosswind component of approximately 25 knots. Exceeding this value doesn't prohibit operations but requires exceptional pilot technique and awareness."
  },
  {
    question: "In a Little Bird, dissymmetry of lift is compensated for by:",
    answers: ["Increasing collective pitch", "Cyclic feathering and blade flapping", "Tail rotor authority", "Engine governor adjustment"],
    correct: 1,
    explanation: "Cyclic feathering changes blade pitch throughout the rotation cycle, while blade flapping allows blades to rise and fall, equalizing lift between advancing and retreating sides during forward flight."
  },
  {
    question: "During a quick-stop maneuver in a Little Bird, what is the greatest risk?",
    answers: ["Tail rotor strike", "Main rotor overspeed", "Settling with power", "Mast bumping"],
    correct: 0,
    explanation: "During aggressive deceleration, the tail rises significantly. If aft cyclic is applied too aggressively, the tail boom can rise into the main rotor disc, resulting in a catastrophic tail rotor strike."
  },
  {
    question: "What is translational lift?",
    answers: ["Increased efficiency when transitioning from hover to forward flight", "Lift generated during autorotation", "Additional lift from ground effect", "Lift from tail rotor thrust"],
    correct: 0,
    explanation: "Translational lift occurs around 16-24 knots as the helicopter moves out of its own downwash, providing cleaner airflow through the rotor system and increased efficiency, requiring less power to maintain altitude."
  },
  {
    question: "A Little Bird experiences settling with power (vortex ring state) when:",
    answers: ["Rate of descent exceeds rotor's ability to generate lift despite power available", "Flying too fast in ground effect", "Collective pitch is reduced during hover", "Tail rotor loses effectiveness"],
    correct: 0,
    explanation: "Vortex ring state occurs when the helicopter descends into its own downwash at rates typically exceeding 300 fpm with low forward airspeed, causing recirculating air that destroys rotor efficiency despite available power."
  },
  {
    question: "The best autorotation glide speed for a Little Bird is approximately:",
    answers: ["40 knots", "60 knots", "80 knots", "100 knots"],
    correct: 1,
    explanation: "Most light helicopters achieve optimal autorotation glide ratio at approximately 60 knots, balancing rotor RPM maintenance with forward distance coverage. This speed provides the greatest glide distance in engine-out scenarios."
  },
  {
    question: "Ground effect is most pronounced when hovering at a height:",
    answers: ["Below ½ rotor diameter", "Below 1 rotor diameter", "Below 2 rotor diameters", "Ground effect is constant at all heights"],
    correct: 1,
    explanation: "Ground effect significantly reduces induced drag when hovering below one rotor diameter above ground, as the surface interrupts tip vortices and reduces downwash velocity, requiring less power to hover."
  },
  {
    question: "During a hovering right turn in a Little Bird, what pedal input is required?",
    answers: ["Left pedal", "Right pedal", "Neutral pedal", "Variable depending on wind"],
    correct: 1,
    explanation: "Right pedal increases tail rotor thrust to yaw the nose right. In a hovering turn, you coordinate this with slight opposite cyclic to prevent the helicopter from drifting in the direction of tail rotor thrust."
  },
  {
    question: "What is the primary cause of loss of tail rotor effectiveness (LTE)?",
    answers: ["Weathervaning tendency in certain wind conditions", "Low main rotor RPM", "Excessive collective application", "Cold temperature operations"],
    correct: 0,
    explanation: "LTE occurs primarily in left quartering tailwinds (210-330° for American helicopters) where the tail rotor operates in disturbed air from the main rotor or fuselage, reducing its ability to produce anti-torque thrust."
  },
  {
    question: "In a Little Bird, increasing collective pitch without adding throttle will cause:",
    answers: ["Rotor RPM to decrease and aircraft to climb", "Rotor RPM to decrease and aircraft to descend", "Rotor RPM to increase", "No change in rotor RPM due to governor"],
    correct: 0,
    explanation: "Increasing collective increases blade angle of attack, creating more drag on the rotor system. Without additional power, RPM decays. However, the increased lift still causes the aircraft to initially climb before settling as RPM drops."
  },
  {
    question: "The purpose of the throttle correlator/governor in a Little Bird is to:",
    answers: ["Automatically maintain rotor RPM within limits", "Increase maximum engine power output", "Reduce fuel consumption during cruise", "Prevent over-torquing the transmission"],
    correct: 0,
    explanation: "The governor senses rotor RPM and automatically adjusts engine power to maintain RPM in the green arc, compensating for collective pitch changes and allowing the pilot to focus on flight control rather than constant throttle adjustment."
  },
  {
    question: "During a running landing in a Little Bird, you should:",
    answers: ["Touch down tail-low with forward speed", "Touch down flat with forward speed", "Touch down nose-low to prevent tail strike", "Reduce all forward speed before touchdown"],
    correct: 1,
    explanation: "Running landings require touching down in a level attitude with forward groundspeed, allowing the skids to slide along the surface while dissipating energy. Tail-low risks tail rotor strike; nose-low risks dynamic rollover."
  },
  {
    question: "What is the primary reason for performing a power check before takeoff?",
    answers: ["Verify engine can produce sufficient power for flight conditions", "Warm up hydraulic systems", "Check fuel quantity accuracy", "Test radio communications"],
    correct: 0,
    explanation: "The power check ensures the engine can produce required manifold pressure/torque at a specific altitude and temperature, confirming adequate power is available for takeoff gross weight and density altitude conditions."
  },
  {
    question: "Dynamic rollover in a Little Bird is most likely to occur when:",
    answers: ["A skid is stuck or pivoting during takeoff/landing", "Flying at high altitude", "Performing autorotations", "In cruising flight"],
    correct: 0,
    explanation: "Dynamic rollover occurs when a skid becomes a pivot point (from slope, soft ground, or snagged object) and lateral cyclic cannot overcome the rolling moment. The helicopter rapidly rolls beyond the critical angle, becoming unrecoverable."
  },
  {
    question: "In a Little Bird, effective translational lift (ETL) is typically encountered at:",
    answers: ["12-15 knots", "16-24 knots", "30-35 knots", "40-50 knots"],
    correct: 1,
    explanation: "ETL occurs at 16-24 knots as the helicopter accelerates out of its recirculating wake, experiencing improved rotor efficiency, reduced induced drag, and often a noticeable 'bump' as the aircraft becomes more efficient."
  },
  {
    question: "The critical engine-out decision point during takeoff is primarily based on:",
    answers: ["Altitude, airspeed, and rate of climb achieved", "Time elapsed since liftoff", "Distance from takeoff point", "Main rotor RPM percentage"],
    correct: 0,
    explanation: "The decision to continue or abort after engine failure depends on whether sufficient altitude and airspeed exist to execute a safe autorotation. Below this point, immediate landing is required; above it, controlled autorotation is possible."
  },
  {
    question: "During high-density altitude operations in a Little Bird, you should expect:",
    answers: ["Decreased engine power and reduced rotor efficiency", "Increased engine power and improved rotor efficiency", "No change in performance", "Better hover performance but degraded cruise performance"],
    correct: 0,
    explanation: "High density altitude (high elevation, temperature, humidity) reduces air density, decreasing both engine power output and rotor thrust production. This significantly degrades hover and climb performance, requiring longer takeoff distances."
  },
  {
    question: "The main purpose of a reconnaissance orbit in a Little Bird is to:",
    answers: ["Maintain visual contact with ground elements while providing aerial security", "Conserve fuel during extended missions", "Practice instrument flight procedures", "Test radio communication range"],
    correct: 0,
    explanation: "Reconnaissance orbits allow the crew to continuously observe an area of operations, maintain radio contact with ground forces, and provide immediate response capability while remaining within visual and weapons range of the objective."
  },
  {
    question: "When performing a steep approach in a Little Bird, the pilot must be aware of:",
    answers: ["Increased susceptibility to settling with power", "Reduced fuel consumption", "Improved autorotation capability", "Decreased control authority"],
    correct: 0,
    explanation: "Steep approaches (greater than normal descent angles) with low forward speed increase the risk of settling with power as the helicopter descends through disturbed air at high rates, potentially entering vortex ring state."
  },
  {
    question: "In a Little Bird, what is the primary flight control that changes the pitch of the main rotor blades collectively?",
    answers: ["Cyclic stick", "Collective lever", "Anti-torque pedals", "Throttle twist grip"],
    correct: 1,
    explanation: "The collective lever changes the pitch angle of all main rotor blades simultaneously and equally, controlling thrust and therefore altitude. Raising collective increases blade pitch and lift; lowering decreases it."
  },
  {
    question: "During forward flight in a Little Bird, the advancing blade experiences:",
    answers: ["Higher relative wind velocity than the retreating blade", "Lower relative wind velocity than the retreating blade", "Same relative wind as the retreating blade", "No relative wind"],
    correct: 0,
    explanation: "The advancing blade's velocity equals blade rotation speed plus helicopter forward speed, while the retreating blade's equals rotation speed minus forward speed. This creates asymmetric lift addressed by cyclic feathering and blade flapping."
  },
  {
    question: "What is the purpose of the stabilizer bar (on helicopters so equipped)?",
    answers: ["Provides artificial stability to the rotor system", "Increases maximum rotor RPM", "Reduces engine fuel consumption", "Eliminates need for tail rotor"],
    correct: 0,
    explanation: "The stabilizer bar (Bell system) provides mechanical feedback to resist unwanted main rotor disc movement, creating artificial stability and reducing pilot workload, especially in turbulence or during aggressive maneuvering."
  },
  {
    question: "A Little Bird's service ceiling is defined as the altitude at which:",
    answers: ["Rate of climb decreases to 100 fpm", "Engine reaches maximum RPM", "Aircraft can no longer maintain level flight", "Fuel consumption is optimized"],
    correct: 0,
    explanation: "Service ceiling is the density altitude where the aircraft can still achieve a climb rate of 100 feet per minute at maximum continuous power. Above this, insufficient power exists for safe maneuvering and climb capability."
  },
  {
    question: "When hovering a Little Bird over tall grass or water, the pilot may experience:",
    answers: ["Loss of visual reference causing spatial disorientation", "Improved ground effect", "Automatic altitude hold", "Reduced engine temperature"],
    correct: 0,
    explanation: "Hovering over uniform surfaces like grass or water eliminates depth perception cues, potentially causing spatial disorientation. Pilots must reference instruments or establish hover references on solid objects to maintain position and altitude."
  },
  {
    question: "In a Little Bird, the cyclic control primarily affects:",
    answers: ["Direction of rotor thrust vector", "Total rotor thrust magnitude", "Tail rotor blade pitch", "Engine power output"],
    correct: 0,
    explanation: "The cyclic stick tilts the main rotor disc by changing blade pitch throughout the rotor rotation cycle, directing the thrust vector and controlling horizontal movement. It does not change total thrust magnitude."
  },
  {
    question: "During autorotation in a Little Bird, rotor RPM is primarily controlled by:",
    answers: ["Collective pitch", "Cyclic position", "Throttle setting", "Pedal input"],
    correct: 0,
    explanation: "In autorotation, upward airflow through the rotor disc drives rotation. Collective pitch controls blade angle of attack and therefore rotor drag. Lowering collective reduces drag and allows RPM to increase; raising it bleeds energy and reduces RPM."
  },
  {
    question: "What is the main advantage of a running takeoff in a Little Bird?",
    answers: ["Allows operation at higher gross weights or density altitudes", "Reduces engine wear", "Improves fuel efficiency", "Eliminates need for pre-flight checks"],
    correct: 0,
    explanation: "Running takeoffs allow the helicopter to accelerate into translational lift while maintaining ground contact, building airspeed in ground effect before climbing. This technique requires less power than vertical takeoffs, enabling operations near performance limits."
  },
  {
    question: "The anti-torque pedals in a Little Bird control:",
    answers: ["Yaw by changing tail rotor blade pitch", "Roll by changing main rotor disc tilt", "Pitch by changing main rotor collective", "Engine power output"],
    correct: 0,
    explanation: "Anti-torque pedals change tail rotor blade pitch, varying tail rotor thrust to counteract main rotor torque and control yaw. Right pedal increases tail rotor pitch/thrust to yaw right; left pedal decreases it to yaw left."
  },
  {
    question: "In a Little Bird, what causes the helicopter to pitch up when transitioning from hover to forward flight?",
    answers: ["Gyroscopic precession of the rotor disc", "Reduction in ground effect", "Increase in tail rotor thrust", "Decrease in engine torque"],
    correct: 0,
    explanation: "When forward cyclic tilts the rotor disc forward, gyroscopic precession causes the maximum disc deflection 90° later in the direction of rotation, creating an initial pitch-up moment that must be overcome with continued forward cyclic."
  },
  {
    question: "During a quick-stop maneuver in a Little Bird, what is the correct sequence?",
    answers: ["Aft cyclic to slow, lower collective to descend, level attitude before stopping", "Aft cyclic only until stopped", "Lower collective first, then aft cyclic", "Increase collective and pull aft cyclic simultaneously"],
    correct: 0,
    explanation: "Quick stops require aft cyclic to decelerate, lowering collective to prevent climb, then returning to level attitude before complete stop. The critical element is leveling the aircraft before stopping to prevent tail strike."
  },
  {
    question: "What is the primary limitation of hovering a Little Bird in ground effect at maximum gross weight?",
    answers: ["Insufficient power to hover out of ground effect", "Excessive fuel consumption", "Reduced tail rotor authority", "Inability to perform autorotations"],
    correct: 0,
    explanation: "At max gross weight, the aircraft may only have sufficient power to hover in ground effect (IGE). Attempting to climb out of ground effect (OGE) would exceed available power, potentially causing settling or inability to maintain altitude."
  },
  {
    question: "The purpose of a pre-takeoff hover power check in a Little Bird is to:",
    answers: ["Confirm adequate power is available for intended flight profile", "Test landing gear integrity", "Verify radio frequencies", "Check passenger weight distribution"],
    correct: 0,
    explanation: "A hover power check verifies the aircraft can hover at the current gross weight and density altitude conditions, confirming sufficient power margin exists for takeoff and climb. Insufficient power indicates the need to reduce weight or wait for better conditions."
  },
  {
    question: "In a Little Bird conducting nap-of-the-earth (NOE) flight, the primary risk is:",
    answers: ["Collision with terrain or obstacles due to limited reaction time", "Engine overheat from extended low-altitude operations", "Excessive fuel consumption", "Loss of radio communication"],
    correct: 0,
    explanation: "NOE flight at very low altitudes and high speeds dramatically reduces obstacle clearance time and recovery options. Collision with terrain, wires, or trees is the primary hazard, requiring exceptional situational awareness and aircraft control."
  },
  {
    question: "What is the correct recovery procedure from settling with power in a Little Bird?",
    answers: ["Lower collective and apply forward cyclic to exit the vortex", "Increase collective to climb out", "Reduce throttle and enter autorotation", "Apply aft cyclic to slow descent rate"],
    correct: 0,
    explanation: "Recovery from vortex ring state requires breaking the recirculation pattern by lowering collective (reducing power demand) and applying forward cyclic to achieve clean airflow through the rotor disc, exiting the disturbed air."
  },
  {
    question: "When conducting formation flight in Little Birds, the wingman position is maintained using:",
    answers: ["Visual reference to lead aircraft and precise control inputs", "GPS autopilot linkage", "Radio navigation aids", "Radar tracking systems"],
    correct: 0,
    explanation: "Formation flight requires constant visual reference to the lead aircraft and smooth, precise control inputs to maintain position. The wingman monitors closure rate, line-of-sight angle, and separation distance while adapting to lead's maneuvers."
  },
  {
    question: "In a Little Bird, retreating blade stall is most likely when:",
    answers: ["High forward speed combined with high disc loading", "Hovering in calm winds", "Flying at low altitude with low airspeed", "During autorotation"],
    correct: 0,
    explanation: "Retreating blade stall occurs when high forward speed creates large velocity differential between advancing and retreating blades. Add high disc loading (heavy weight/high density altitude) requiring steep blade angles, and the retreating blade exceeds critical angle of attack."
  },
  {
    question: "What is the primary purpose of performing a power recovery during autorotation training?",
    answers: ["Practice recovering to powered flight before touchdown", "Test engine response time", "Verify fuel system operation", "Check hydraulic system functionality"],
    correct: 0,
    explanation: "Power recoveries allow pilots to practice the autorotation maneuver without landing, building proficiency in energy management, rotor RPM control, and the critical timing of collective application while recovering to normal powered flight."
  },
  {
    question: "During a confined area operation in a Little Bird, the approach angle should be:",
    answers: ["Steep enough to clear obstacles while maintaining escape options", "Shallow to minimize descent rate", "Vertical to minimize approach time", "At cruise angle regardless of obstacles"],
    correct: 0,
    explanation: "Confined area approaches balance obstacle clearance with maintaining escape options. The approach must be steep enough to clear barriers but not so steep as to risk settling with power or eliminate the ability to abort and climb out if needed."
  },
  {
    question: "What is the main rotor system's critical angle of attack?",
    answers: ["The angle at which airflow separates and the blade stalls", "The optimal angle for maximum efficiency", "The minimum angle for producing lift", "The angle that produces maximum rotor RPM"],
    correct: 0,
    explanation: "The critical angle of attack is typically 12-15° for most rotor blades. Exceeding this angle causes airflow separation from the upper blade surface, destroying lift and causing the blade to stall, similar to fixed-wing aerodynamics."
  },
  {
    question: "In a Little Bird, what is the effect of high-density altitude on hovering performance?",
    answers: ["Requires more power to hover; may exceed available power", "Requires less power to hover; improved efficiency", "No effect on hover; only affects forward flight", "Improves hover stability"],
    correct: 0,
    explanation: "High density altitude reduces air density, decreasing both engine power output and rotor thrust. The engine produces less power while the rotor needs more power to generate equivalent lift, potentially making hover impossible at high gross weights."
  },
  {
    question: "When performing a slope landing in a Little Bird, the pilot should:",
    answers: ["Land upslope wheel/skid first, then carefully lower downslope side", "Land downslope wheel/skid first", "Land flat regardless of slope angle", "Always refuse to land on slopes"],
    correct: 0,
    explanation: "Slope landings require touching the uphill skid first while maintaining level rotor disc, then carefully lowering the downhill skid with precise lateral cyclic control to prevent dynamic rollover. The rotor disc must remain level throughout."
  },
  {
    question: "The main purpose of anti-torque pedals during hover is to:",
    answers: ["Maintain desired heading by counteracting main rotor torque", "Control altitude", "Adjust rotor RPM", "Engage autopilot systems"],
    correct: 0,
    explanation: "Main rotor torque tries to rotate the fuselage opposite the rotor direction. Anti-torque pedals vary tail rotor thrust to counteract this torque, allowing the pilot to maintain or change heading during hover and low-speed flight."
  },
  {
    question: "What is the recommended action if a Little Bird experiences a loss of tail rotor effectiveness during flight?",
    answers: ["Reduce power, increase airspeed, and land as soon as practical", "Increase power to maximum and climb", "Enter autorotation immediately", "Continue flight normally"],
    correct: 0,
    explanation: "LTE recovery requires reducing power (decreasing torque reaction), increasing forward airspeed (improving tail rotor efficiency with clean airflow), and landing as soon as practical to avoid complete loss of directional control, especially in hover."
  },
  {
    question: "During a Little Bird's pre-flight inspection, discovering a main rotor blade with a small crack would require:",
    answers: ["Grounding the aircraft until repair by qualified maintenance", "Noting it in the logbook but continuing flight", "Performing a test flight to assess severity", "Covering the crack with speed tape"],
    correct: 0,
    explanation: "Any crack in a main rotor blade is a critical safety issue indicating potential structural failure. The aircraft must be immediately grounded and the blade inspected/repaired by certified maintenance personnel before further flight."
  },
  {
    question: "What is the primary danger of exceeding VNE (velocity never exceed) in a Little Bird?",
    answers: ["Retreating blade stall and potential structural failure", "Excessive fuel consumption", "Engine overheat", "Loss of radio communication"],
    correct: 0,
    explanation: "Exceeding VNE risks retreating blade stall (as advancing blade lift increases and retreating blade nears stall), potential mast bumping in some rotor systems, structural overstress, and control system overload - all potentially catastrophic."
  },
  {
    question: "In a Little Bird, what causes translating tendency (drift) during hover?",
    answers: ["Tail rotor thrust has a horizontal component pushing the aircraft sideways", "Main rotor torque", "Wind effects only", "Uneven fuel distribution"],
    correct: 0,
    explanation: "Tail rotor thrust, while primarily producing anti-torque, also has a horizontal component (typically pushing right in American helicopters) causing the aircraft to drift. Pilots compensate with lateral cyclic to maintain hover position."
  },
  {
    question: "The purpose of a reconnaissance flight pattern in a Little Bird is to:",
    answers: ["Systematically observe and report on terrain, enemy positions, and tactical situations", "Practice instrument approaches", "Calibrate navigation equipment", "Maximize fuel efficiency"],
    correct: 0,
    explanation: "Reconnaissance patterns allow systematic visual observation of areas of operation, enemy activity, terrain features, and tactical situations while maintaining defensive posture and communication with ground elements to provide timely intelligence."
  },
  {
    question: "When a Little Bird enters translational lift, the pilot will notice:",
    answers: ["Decreased power requirement and aircraft tendency to climb", "Increased power requirement", "Loss of tail rotor effectiveness", "Automatic engagement of autopilot"],
    correct: 0,
    explanation: "Entering translational lift (16-24 knots) dramatically improves rotor efficiency as the helicopter exits its downwash. Power requirement decreases for the same altitude, often causing the aircraft to climb unless collective is reduced."
  },
  {
    question: "What is the recommended course of action if a Little Bird's low rotor RPM warning activates during flight?",
    answers: ["Immediately lower collective and add throttle to restore RPM", "Increase collective to climb", "Enter autorotation", "Reduce airspeed"],
    correct: 0,
    explanation: "Low rotor RPM is critical - insufficient RPM means insufficient lift and control authority. Immediate action is lowering collective (reducing blade drag) and adding throttle/power to restore RPM before attempting any other maneuvers."
  },
  {
    question: "In a Little Bird conducting tactical formation flight, proper position is maintained by:",
    answers: ["Constant visual reference and anticipating lead aircraft movements", "Following GPS coordinates", "Maintaining fixed distance via radar", "Radio altitude callouts only"],
    correct: 0,
    explanation: "Tactical formation requires constant visual contact with lead, anticipating their movements, and making smooth control inputs to maintain proper position, bearing, and separation while remaining vigilant for threats and obstacles."
  },
  {
    question: "The primary reason for conducting a hover taxi rather than flight taxi in a Little Bird is:",
    answers: ["Greater precision and control in confined areas", "Reduced fuel consumption", "Faster transit speed", "Reduced engine wear"],
    correct: 0,
    explanation: "Hover taxi (in ground effect, below translational lift speed) provides maximum control and precision in confined areas with obstacles, allowing the pilot to carefully navigate tight spaces at slower speeds than flight taxi."
  },
  {
    question: "What is the effect of a strong quartering tailwind on a Little Bird during hover?",
    answers: ["Increased risk of loss of tail rotor effectiveness", "Improved fuel efficiency", "Enhanced directional stability", "No significant effect"],
    correct: 0,
    explanation: "Quartering tailwinds (especially left quartering for American helicopters, 210-330°) create conditions where the tail rotor operates in disturbed air from main rotor wash or fuselage, dramatically reducing its effectiveness and potentially causing LTE."
  },
  {
    question: "During emergency procedures in a Little Bird, the pilot's first priority is always:",
    answers: ["Maintain rotor RPM within limits", "Transmit mayday call", "Check emergency checklist", "Identify landing area"],
    correct: 0,
    explanation: "Rotor RPM is life - without it, the helicopter has no lift or control authority. First priority in any emergency is maintaining rotor RPM in the green arc through proper collective and throttle management before addressing other concerns."
  },
  {
    question: "What is the primary purpose of contour flight in a Little Bird?",
    answers: ["Use terrain masking for tactical concealment while maintaining low altitude", "Practice instrument flight", "Maximize range", "Test navigation equipment"],
    correct: 0,
    explanation: "Contour flight follows terrain features at low altitude, using hills, valleys, and vegetation for concealment from enemy observation and fire. It requires constant terrain awareness, precise control, and high pilot workload."
  },
  {
    question: "In a Little Bird, what is the correct procedure for a running landing?",
    answers: ["Maintain forward speed, level attitude, touchdown on aft skids first, then forward skids", "Flare aggressively and stop all forward movement before touchdown", "Touch down on forward skids first", "Maintain vertical descent with no forward speed"],
    correct: 0,
    explanation: "Running landings require maintaining forward groundspeed while establishing a level or slightly tail-low attitude, touching the aft portion of the skids first, then allowing the forward skids to contact as the helicopter settles and decelerates."
  },
  {
    question: "What is the main indication of an impending main rotor blade stall in a Little Bird?",
    answers: ["Abnormal vibration, nose pitch up, and possible roll", "Smooth flight with no warnings", "Decrease in engine RPM", "Loss of radio communication"],
    correct: 0,
    explanation: "Blade stall (especially retreating blade stall) causes abnormal vibration as stalled blades lose lift, nose pitch up as the advancing side generates disproportionate lift, and possible roll toward the retreating blade side."
  },
  {
    question: "When approaching a Little Bird's maximum gross weight, the pilot should expect:",
    answers: ["Reduced performance margins and increased settling tendency", "Improved climb performance", "Better fuel economy", "Enhanced maneuverability"],
    correct: 0,
    explanation: "Operating near max gross weight reduces all performance margins - reduced climb rate, longer takeoff distance, higher power requirements, greater settling tendency, and reduced ability to recover from vortex ring state or perform emergency maneuvers."
  },
  {
    question: "The correct procedure for recovering from an inadvertent IMC encounter in a Little Bird is:",
    answers: ["Transition to instruments, maintain level flight, and execute 180° turn if able", "Immediately descend to regain visual contact", "Climb to clear all obstacles", "Continue flight using only visual cues"],
    correct: 0,
    explanation: "Inadvertent IMC requires immediate transition to instrument scan, establishing level flight attitude, and if qualified/able, executing a controlled 180° turn to exit IMC. Spatial disorientation in IMC is deadly for non-instrument rated pilots."
  },
  {
    question: "During a Little Bird's tactical insertion, the pilot should:",
    answers: ["Minimize time in the landing zone while ensuring passenger safety", "Take maximum time to ensure perfect positioning", "Circle the area multiple times before landing", "Shut down engines during passenger offload"],
    correct: 0,
    explanation: "Tactical insertions demand speed - minimize exposure time in the landing zone while ensuring troops can safely exit, then immediately depart. Extended time in an LZ increases vulnerability to enemy fire and compromise of the mission."
  },
  {
    question: "What is the primary advantage of flying a Little Bird in contour flight mode?",
    answers: ["Terrain masking provides concealment from ground-based threats", "Improved fuel efficiency", "Easier navigation", "Better radio communication range"],
    correct: 0,
    explanation: "Contour flight uses terrain features to mask the aircraft from enemy observation and weapons systems. Flying low and following terrain contours prevents silhouetting against the sky and makes detection/engagement much more difficult."
  },
  {
    question: "In a Little Bird, what is the function of the cyclic trim button (if equipped)?",
    answers: ["Relieves control pressures by adjusting servo positions", "Increases rotor RPM", "Activates autopilot", "Adjusts fuel mixture"],
    correct: 0,
    explanation: "The cyclic trim (force trim) button allows pilots to relieve control stick pressures by repositioning hydraulic servos or mechanical linkages to maintain current attitude without constant stick pressure, reducing pilot fatigue on extended flights."
  },
  {
    question: "What is the recommended recovery technique if a Little Bird begins to settle during a steep approach?",
    answers: ["Increase power and/or decrease descent rate with forward cyclic", "Decrease power and continue descent", "Enter autorotation immediately", "Increase collective only"],
    correct: 0,
    explanation: "Settling on steep approaches indicates approaching vortex ring state. Recovery requires increasing power (if available) and/or moving forward out of the descent path to exit disturbed air, re-establishing clean airflow through the rotor disc."
  },
  {
    question: "The primary concern when conducting pinnacle/ridgeline operations in a Little Bird is:",
    answers: ["Updrafts, downdrafts, and sudden wind changes affecting control", "Radio communication difficulties", "Fuel consumption", "Engine overheating"],
    correct: 0,
    explanation: "Pinnacles and ridgelines create unpredictable wind currents - updrafts on windward sides, downdrafts on leeward sides, and turbulence. These sudden changes can dramatically affect hover control and require immediate pilot response to maintain position."
  },
  {
    question: "When performing a tactical approach in a Little Bird, the pilot should:",
    answers: ["Use terrain and obstacles for concealment while maintaining escape options", "Fly the standard traffic pattern", "Approach at maximum altitude for visibility", "Circle the landing zone multiple times"],
    correct: 0,
    explanation: "Tactical approaches use available terrain masking and obstacles for concealment during the approach while maintaining situational awareness and escape routes. This minimizes exposure to threats while allowing rapid abort if the LZ is compromised."
  },
  {
    question: "What is the purpose of a Little Bird's maximum continuous power rating?",
    answers: ["Maximum power sustainable for extended periods without damage", "Power available only during emergencies", "Maximum power during startup", "Power for autorotation only"],
    correct: 0,
    explanation: "Maximum continuous power is the highest power setting the engine can sustain indefinitely without exceeding temperature or stress limits. It's less than takeoff power (5-minute limit) but available for extended climb or cruise operations."
  },
  {
    question: "In a Little Bird conducting combat search and rescue, the primary consideration during approach is:",
    answers: ["Balance speed with threat exposure while assessing landing zone safety", "Maximize fuel conservation", "Maintain maximum altitude", "Complete multiple reconnaissance orbits"],
    correct: 0,
    explanation: "CSAR approaches require balancing rapid response time with tactical awareness - approach quickly to minimize survivor exposure but assess LZ for threats, obstacles, and suitability before committing to land in potentially hostile territory."
  },
  {
    question: "What is the correct response to an engine fire warning in flight in a Little Bird?",
    answers: ["Execute emergency shutdown procedure and enter autorotation", "Continue to nearest airport", "Increase airspeed to blow out fire", "Land immediately without shutdown"],
    correct: 0,
    explanation: "Engine fire requires immediate action - execute emergency engine shutdown (fuel, throttle, fire suppression if equipped) and enter autorotation for landing at nearest suitable area. Continuing flight risks catastrophic fire spread and structural failure."
  },
  {
    question: "During hovering flight in a Little Bird, what causes the need for left pedal in American helicopters?",
    answers: ["Main rotor torque reaction turning fuselage right", "Tail rotor drift", "Wind effects", "Center of gravity offset"],
    correct: 0,
    explanation: "Newton's third law - the engine turns the rotor counterclockwise (viewed from above), creating equal and opposite torque trying to turn the fuselage clockwise (right). Left pedal increases right-directed tail rotor thrust to counteract this."
  },
  {
    question: "What is the primary purpose of conducting systems checks after landing a Little Bird?",
    answers: ["Identify any malfunctions or damage before next flight", "Cool down engines", "Log flight time", "Prepare for passenger loading"],
    correct: 0,
    explanation: "Post-landing checks identify any systems damage, malfunctions, or abnormal indications that occurred during flight, ensuring discrepancies are logged and addressed before the next flight, maintaining airworthiness and safety."
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

    // Your direct, original Discord Webhook URL (no proxies!)
    const REAL_DISCORD_URL = 'https://discord.com/api/webhooks/1511883347339644989/RCYLZuwBDp-xLC1xG_rUR97CRZgmXI8S4JhGxkujap_SDi0mTTprmgA17aFbCcs3oDiW';

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

    // Perform a "simple" direct fetch to bypass preflight and CORS entirely
    fetch(REAL_DISCORD_URL, {
        method: 'POST',
        mode: 'no-cors', // Tells the browser we don't need to read the response body
        headers: {
            'Content-Type': 'text/plain' // Downgrades to a "simple request" to skip the preflight check
        },
        body: JSON.stringify(discordPayload)
    })
        .then(() => {
            // Because of 'no-cors', the browser won't let us read the status code,
            // but the request was successfully sent and executed by Discord's server.

            // Show success message
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

            formResponse.innerHTML = `
      <div class="success-message" style="border-color: var(--tactical-red);">
        <h3 style="color: var(--tactical-red); margin-bottom: 20px;">⚠️ TRANSMISSION ERROR</h3>
        <p>There was a connection issue forwarding your application to our database. Please take a screenshot of your passing score (${score}/30) and contact an instructor directly on Discord.</p>
      </div>
    `;
        });
}
initExam();