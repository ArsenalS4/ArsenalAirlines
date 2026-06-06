// ==========================================
// Bell UH-1H Advanced Flight Examination
// ==========================================
// If you're reading this code instead of studying, you're gonna fail
// These are actual turbine questions, not some bullshit trivia
// Good fucking luck memorizing the T53-L-13 limitations, nerds

const QUESTION_POOL = [
  {
    question: "During high-speed cruise in a UH-1H, which combination of factors will most rapidly accelerate the onset of retreating blade stall?",
    answers: [
      "High gross weight, high density altitude, low rotor RPM, and steep banking maneuvers.",
      "Low gross weight, low density altitude, high rotor RPM, and shallow banking maneuvers.",
      "High gross weight, low density altitude, low rotor RPM, and steady coordinated flight.",
      "Low gross weight, high density altitude, high rotor RPM, and rapid cyclic input checks."
    ],
    correct: 0,
    explanation: "Retreating blade stall occurs when the retreating rotor blade exceeds its critical angle of attack. High gross weight, high density altitude, and steep banking increase the required thrust (disk loading), while low rotor RPM forces the blades to operate at a higher angle of attack to compensate."
  },
  {
    question: "To recover from a fully developed vortex ring state (settling with power) in the UH-1H, which control input sequence is aerodynamically optimal?",
    answers: [
      "Apply forward and lateral cyclic to slip out of the downwash column while slightly reducing collective pitch.",
      "Pull aft cyclic to increase rotor disk loading while simultaneously raising the collective to maximum torque.",
      "Apply full left anti-torque pedal to initiate a spin while holding the collective pitch strictly neutral.",
      "Neutralize cyclic inputs, apply full right pedal, and rapidly pull collective pitch to maximum transient limits."
    ],
    correct: 0,
    explanation: "To recover from Settling with Power, the pilot must move the rotor disk out of its own downward vortex column. Applying forward/lateral cyclic establishes translational lift, while slightly reducing collective minimizes the downward vortex strength."
  },
  {
    question: "In the semi-rigid, two-bladed rotor system of the UH-1H, what is the primary structural hazard associated with low-G flight maneuvers?",
    answers: [
      "Abrupt lateral control inputs during low-G can cause the rotor hub to strike the main rotor mast, causing catastrophic failure.",
      "Excessive aerodynamic drag forces will cause the main rotor blades to fold upward, leading to an immediate lockup.",
      "A complete loss of centrifugal force causes the main rotor blades to sail downward and structurally sever the tail boom.",
      "Extreme torsional loads on the rotor shaft will cause the drive system to shear directly at the transmission mount."
    ],
    correct: 0,
    explanation: "Low-G maneuvers (like pushing over the nose) reduce rotor thrust, making the rotor disk highly susceptible to flapping. Abrupt cyclic inputs in this state cause the rotor hub to tilt excessively relative to the mast, resulting in mast bumping and catastrophic separation."
  },
  {
    question: "What is the maximum transient torque limit for the UH-1H Lycoming T53-L-13 turbine engine, and what is its maximum allowable duration?",
    answers: [
      "A maximum limit of 100% torque for a continuous duration not to exceed 10 seconds during transit.",
      "A maximum limit of 110% torque for a continuous duration not to exceed 15 seconds during transit.",
      "A maximum limit of 120% torque for a continuous duration not to exceed 30 seconds during transit.",
      "A maximum limit of 105% torque for a continuous duration not to exceed 05 seconds during transit."
    ],
    correct: 1,
    explanation: "Per the UH-1H operator's manual, transient torque limits allow for up to 110% torque for a maximum of 15 seconds. Exceeding this can cause structural damage to the transmission or engine power turbine."
  },
  {
    question: "If a complete loss of tail rotor thrust occurs during cruise flight at 90 KIAS, what is the initial recommended recovery procedure?",
    answers: [
      "Maintain level flight, reduce engine torque to reduce yaw, and execute a run-on landing above translation lift.",
      "Immediately enter a full autorotation, reduce throttle to idle, and adjust airspeed to maintain 80 KIAS.",
      "Apply full right pedal, increase collective pitch to maximum torque, and initiate a steep climbing left turn.",
      "Increase airspeed rapidly to 110 KIAS, execute a hard banking left turn, and maintain high engine power."
    ],
    correct: 0,
    explanation: "At high airspeeds, the vertical stabilizer of the UH-1H provides significant aerodynamic directional stability. Reducing torque minimizes the anti-torque demand, allowing the pilot to maintain heading and perform a run-on landing rather than immediately entering a forced autorotation."
  },
  {
    question: "During a steady-state autorotation in the UH-1H, how does the pilot primarily manage the main rotor RPM (Nr)?",
    answers: [
      "By adjusting the collective pitch to modify the angle of attack and lift-drag vectors of the main rotor blades.",
      "By adjusting cyclic position to directly control the vertical rate of descent of the entire rotor disk system.",
      "By adjusting anti-torque pedals to vary the aerodynamic drag profile on the left side of the tail boom.",
      "By adjusting the engine throttle to manually manipulate the output rotational speed of the free power turbine."
    ],
    correct: 0,
    explanation: "Rotor RPM is controlled primarily via the collective. Lowering the collective decreases blade angle of attack, reducing drag and increasing rotor speed. Raising collective increases blade angle of attack, increasing lift and drag, which slows the rotor down."
  },
  {
    question: "In the event of a complete hydraulic system failure in the UH-1H, what is the recommended limit for maximum airspeed?",
    answers: [
      "Airspeed must be restricted to a maximum of 61 KIAS to prevent uncontrollable feedback and force on the flight controls.",
      "Airspeed must be restricted to a maximum of 80 KIAS to avoid main rotor disk blowback and structural mast limitations.",
      "Airspeed must be restricted to a maximum of 40 KIAS to maintain sufficient mechanical leverage over the control linkages.",
      "Airspeed must be restricted to a maximum of 120 KIAS to ensure dynamic stability is maintained during manual flight."
    ],
    correct: 0,
    explanation: "When hydraulic pressure is lost, flight control forces increase dramatically due to aerodynamic feedback. Airspeed must be limited to 61 KIAS to ensure the pilot has the physical strength required to manually override control feedback forces safely."
  },
  {
    question: "When the main fuel switch is turned to the OFF position on the UH-1H overhead console, which physical component is immediately actuated?",
    answers: [
      "The electrically operated fuel shutoff valve closes, immediately stopping fuel flow to the turbine engine.",
      "The mechanical fuel pump disengages from the accessory gearbox, cutting fuel delivery to the combustion chamber.",
      "The electrical fuel boost pumps lose power, causing the engine to starve from a rapid loss of line pressure.",
      "The primary fuel nozzle restricts flow to minimum flow stops, causing a controlled and safe turbine flameout."
    ],
    correct: 0,
    explanation: "The main fuel switch controls the electric firewall shutoff valve. Turning it off physically closes this valve, cutting off the fuel supply before it can reach any engine pumps."
  },
  {
    question: "Which physical condition must exist for a UH-1H to enter a dynamic rollover sequence during a slope takeoff or landing?",
    answers: [
      "A pivot point must be established, and a rolling moment must be allowed to exceed the critical static limit.",
      "The collective must be pulled rapidly, and engine torque must be allowed to exceed the transient limits.",
      "The anti-torque pedals must be crossed, and the yaw rate must exceed the gyroscopic stability limits.",
      "The main rotor hub must strike the mast, and lateral cyclic must be driven to its physical travel limit."
    ],
    correct: 0,
    explanation: "Dynamic rollover requires a pivot point (such as a skid caught on the ground or a slope) and a rolling rate that exceeds the critical rollover angle, at which point lateral cyclic control is insufficient to stop the roll."
  },
  {
    question: "At what approximate airspeed range does the UH-1H experience transverse flow effect, and what is the typical pilot control correction?",
    answers: [
      "10 to 20 knots, requiring left and forward cyclic inputs to maintain desired attitude and heading.",
      "30 to 40 knots, requiring right and aft cyclic inputs to maintain desired attitude and heading.",
      "5 to 10 knots, requiring left pedal and aft cyclic inputs to maintain desired attitude and heading.",
      "50 to 60 knots, requiring right pedal and forward cyclic inputs to maintain desired attitude and heading."
    ],
    correct: 0,
    explanation: "Transverse flow effect occurs between 10 and 20 knots as air passing through the rear of the rotor disk has more time to acquire downward velocity than air in the front. Due to gyroscopic precession, this causes a roll to the right, requiring left and forward cyclic to correct."
  },
  {
    question: "Which aerodynamic region poses the greatest risk of Loss of Tail Rotor Effectiveness (LTE) in the UH-1H when operating at high power settings?",
    answers: [
      "A left quartering headwind, which causes main rotor tip vortices to interfere directly with tail rotor efficiency.",
      "A right quartering headwind, which induces an anti-torque blade aerodynamic stall across the entire tail disk.",
      "A direct tailwind, which completely eliminates the weathercock stability of the tail boom assembly.",
      "A right crosswind, which forces the tail rotor into a state of local vortex ring development."
    ],
    correct: 0,
    explanation: "A wind from 285 to 315 degrees (left quartering headwind) blows main rotor blade tip vortices directly into the tail rotor, causing highly turbulent airflow and a rapid, unexpected loss of tail rotor thrust."
  },
  {
    question: "During an engine-out emergency in a hover at 10 feet AGL, what is the correct pilot action to ensure a survivable touchdown?",
    answers: [
      "Apply right pedal to control yaw, maintain level cyclic, and pull collective just before touchdown to cushion the impact.",
      "Immediately lower the collective fully, apply left cyclic to initiate a slide, and flare hard near the surface.",
      "Increase collective immediately to use residual rotor energy, apply forward cyclic, and execute a sliding landing.",
      "Apply left pedal to control yaw, pull aft cyclic to establish a nose-high attitude, and lower collective rapidly."
    ],
    correct: 0,
    explanation: "In a low hover engine failure, there is no time to glide. The pilot must apply right pedal to counter the torque loss (yaw), keep the helicopter level with cyclic, and use the remaining inertia in the rotor blades by pulling collective right before the skids hit."
  },
  {
    question: "How does the Lycoming T53 turbine engine maintain a constant rotor RPM under changing aerodynamic loads?",
    answers: [
      "The mechanical governor automatically adjusts fuel flow to maintain a pre-selected N2 speed as rotor loads change.",
      "The pilot must manually adjust the overhead throttle control in response to any changes in torque demand.",
      "The collective linkage is mechanically synchronized to directly rotate the engine fuel valve shaft proportionally.",
      "The compressor bleed valves dynamically vent excess internal pressure to regulate turbine rotational speed."
    ],
    correct: 0,
    explanation: "The UH-1H uses a mechanical governor system. When rotor load increases or decreases, the N2 governor senses the RPM change and automatically adjusts the fuel flow to keep N2/Rotor RPM constant."
  },
  {
    question: "What is the primary aerodynamic purpose of the sync elevators located on the tail boom of the UH-1H?",
    answers: [
      "They are linked to the cyclic control to help maintain a desirable fuselage attitude throughout different airspeeds.",
      "They provide aerodynamic yaw damping to stabilize the helicopter during high-speed cruise flight conditions.",
      "They assist the tail rotor by providing extra anti-torque lift through aerodynamic vectoring of the tail wash.",
      "They act as structural trim tabs to prevent the tail boom from twisting under extreme engine torque loads."
    ],
    correct: 0,
    explanation: "The sync elevators are mechanically linked to the cyclic. As the pilot moves the cyclic forward or aft, the sync elevators tilt, providing aerodynamic pitch forces to keep the cabin level and reduce drag."
  },
  {
    question: "What does a flickering or steady 'ENGINE OIL PRESS' caution light indicate, and what is the immediate pilot action?",
    answers: [
      "Engine oil pressure is below safe limits; immediately monitor pressure, reduce power, and land as soon as possible.",
      "Engine oil temperature has exceeded limits; immediately increase airspeed to assist cooling and continue the flight.",
      "The oil filter bypass valve has opened; immediately enter an autorotation and shut down the engine in flight.",
      "The oil cooler fan has failed; immediately apply maximum engine torque to force more cooling air through the lines."
    ],
    correct: 0,
    explanation: "Low engine oil pressure is a critical emergency. The pilot must immediately check the oil pressure gauge, reduce engine power to minimize heat/friction, and plan to land as soon as possible before the engine seizes."
  },
  {
    question: "What is the consequence of allowing the rotor RPM (Nr) to decay below 90% during power-on operations in the UH-1H?",
    answers: [
      "The generator may disconnect, causing a total electrical failure, and aerodynamic control will degrade severely.",
      "The engine governor will completely lock up, preventing any automatic fuel adjustments from occurring.",
      "The tail rotor will enter a vortex ring state, causing an immediate and uncontrollable spin to the left.",
      "The main rotor blades will flap excessively, leading to an immediate structural mast bumping event."
    ],
    correct: 0,
    explanation: "Rotor RPM must be kept within limits. If Nr drops below 90%, the main generator may automatically drop offline, resulting in an immediate loss of primary AC/DC electrical systems alongside diminished control authority."
  },
  {
    question: "What is the function of the de-ice system on the UH-1H Lycoming T53 engine, and how does it affect performance?",
    answers: [
      "It routes hot bleed air to the engine inlet to prevent ice; activating it causes a noticeable loss in available torque.",
      "It uses electrical heating elements in the intake to melt ice; activating it causes a severe drop in DC voltage.",
      "It injects glycol into the compressor stages to dissolve ice; activating it causes transient engine temperature spikes.",
      "It uses engine oil lines to heat the compressor blades; activating it has no effect on overall engine performance."
    ],
    correct: 0,
    explanation: "Engine de-ice works by redirecting hot compressor bleed air to the engine inlet. Because this air is diverted away from the combustion section, the engine produces less power, resulting in a reduction in maximum available torque."
  },
  {
    question: "During a governor failure where the engine overspeeds (N2/Nr increases above limits), how must the pilot control engine power?",
    answers: [
      "The pilot must switch the governor to manual and control engine speed by manually twisting the collective throttle.",
      "The pilot must use cyclic inputs to load the rotor disk and aerodynamically drag the engine speed down.",
      "The pilot must cycle the main fuel switch between ON and OFF to keep the engine RPM within safe limits.",
      "The pilot must turn off the main generator to remove internal load and reset the mechanical governor valves."
    ],
    correct: 0,
    explanation: "If the automatic governor fails, the pilot must flip the governor switch to 'EMER' (manual mode) and use the collective throttle motorcycle-style to manually keep the N2 and Rotor RPM within the green operating arcs."
  },
  {
    question: "What is 'Translational Lift' in the UH-1H, and at what approximate airspeed does it become fully effective?",
    answers: [
      "Additional lift gained as the rotor disk outruns its own recirculating vortices, fully effective at 16 to 24 knots.",
      "Additional lift gained from the sync elevators at high speed, fully effective at 40 to 50 knots airspeed.",
      "Additional lift gained from the ground cushion during hover operations, fully effective at 2 to 5 knots airspeed.",
      "Additional lift gained as the tail boom stabilizer generates lift, fully effective at 60 to 70 knots airspeed."
    ],
    correct: 0,
    explanation: "Effective Translational Lift (ETL) occurs between 16 and 24 knots. At this speed, the clean incoming airflow allows the rotor system to work with fresh, undisturbed air, significantly increasing rotor efficiency and lift."
  },
  {
    question: "What is the primary indicator of a compressor stall in the UH-1H engine, and what is the recovery procedure?",
    answers: [
      "Sharp engine pops, rising EGT, and fluctuating RPM; immediately reduce collective pitch and adjust throttle as needed.",
      "Rapid rotor RPM drop, falling oil pressure, and cabin vibration; immediately raise collective and turn on de-ice.",
      "A loud high-pitched whine, falling EGT, and yawing to the right; immediately enter an autorotation and flare.",
      "The master caution light illuminates, and engine torque drops to zero; immediately pull full collective pitch."
    ],
    correct: 0,
    explanation: "A compressor stall is characterized by backfiring (pops/bangs), rapid Exhaust Gas Temperature (EGT) rise, and fluctuating RPM. The pilot must reduce collective pitch to lessen the engine load and adjust the throttle to stabilize the airflow through the compressor stages."
  },
  {
    question: "Which component in the UH-1H drive system allows the main rotor to continue spinning when the engine shuts down in flight?",
    answers: [
      "The freewheel unit (sprag clutch) located inside the input drive section of the main transmission assembly.",
      "The flexible couplings mounted on the main drive shaft between the engine output and the input gear.",
      "The automatic governor solenoid valve, which completely disengages the mechanical fuel flow shutoffs.",
      "The hydraulic rotor brake assembly, which releases all pressure when the main electrical bus shuts down."
    ],
    correct: 0,
    explanation: "The freewheel unit (sprag clutch) automatically disengages the engine from the transmission when the engine's RPM drops below the transmission's RPM. This allows the rotor to spin freely, enabling autorotation."
  },
  {
    question: "What is the critical hazard of executing a rapid cyclic pull-up followed by an immediate cyclic push-over in the UH-1H?",
    answers: [
      "It induces a zero-G or low-G state, leading to a catastrophic mast bumping event from rotor disk flapping.",
      "It causes the turbine engine to overspeed, leading to immediate structural turbine blade shedding failures.",
      "It forces the tail rotor into a state of complete aerodynamic stall, causing an immediate spin to the left.",
      "It drains the hydraulic system accumulator reservoir, causing a total loss of flight control servo power."
    ],
    correct: 0,
    explanation: "A cyclic push-over creates a low-G condition. In the UH-1H's semi-rigid rotor, this unloads the rotor head and can lead to mast bumping and separation of the rotor system."
  },
  {
    question: "During a slope landing in the UH-1H, which skid should contact the slope first, and what cyclic correction is required?",
    answers: [
      "The upslope skid contacts first; the pilot must apply lateral cyclic into the slope to keep the helicopter stable.",
      "The downslope skid contacts first; the pilot must apply lateral cyclic away from the slope to prevent rolling.",
      "Both skids must contact simultaneously; the pilot must apply full aft cyclic to keep the nose pitched up.",
      "The upslope skid contacts first; the pilot must apply full forward cyclic to level the main rotor disk."
    ],
    correct: 0,
    explanation: "The upslope skid must touch down first. As collective is lowered, cyclic must be held into the slope to keep the main rotor thrust vector vertical, preventing a dynamic rollover downslope."
  },
  {
    question: "If the 'INST BCKUP' caution light illuminates on the dashboard, what does this indicate to the pilot?",
    answers: [
      "The primary AC instrument electrical bus has failed, and the critical instruments are now running on backup DC power.",
      "The co-pilot's flight instrument panel has disconnected, and all control inputs must be taken by the captain.",
      "The primary attitude indicator gyro has failed, and the mechanical backup system is now stabilizing the display.",
      "The hydraulic backup pump has turned on, and the pilot must limit control movements to prevent overheating."
    ],
    correct: 0,
    explanation: "The 'INST BCKUP' light indicates a failure of the primary AC instrument power, forcing the critical pilot instruments to switch to backup DC power via the emergency inverter."
  },
  {
    question: "How does 'Ground Effect' affect the hover performance of the UH-1H, and what is the maximum height for ground effect?",
    answers: [
      "It reduces induced flow and drag, allowing a hover with less power; maximum height is about one rotor diameter.",
      "It increases vertical drag on the tail boom, requiring more power to hover; maximum height is about ten feet.",
      "It increases engine intake pressure, allowing the turbine to produce more torque; maximum height is fifty feet.",
      "It eliminates main rotor tip vortices completely, allowing a hover with zero torque; maximum height is two feet."
    ],
    correct: 0,
    explanation: "Ground effect occurs when hovering near the ground (within about one rotor diameter, ~48 feet for the UH-1H). The ground restricts the downward airflow, reducing induced flow and rotor tip vortices, which lets the helicopter hover with less engine power."
  },
  {
    question: "What is the primary danger of operating the UH-1H in conditions of high density altitude?",
    answers: [
      "Both aerodynamic lift and engine power are severely reduced, greatly increasing power required to hover.",
      "The engine governor cannot properly sense N2 speed, leading to automatic fuel control lockups in flight.",
      "The anti-torque pedal cables become loose, reducing control over tail rotor thrust in high winds.",
      "The main rotor blades become stiff, preventing the cyclic from tilting the rotor disk during maneuvers."
    ],
    correct: 0,
    explanation: "High density altitude means thin air. This reduces both the lift generated by the blades and the oxygen available for the engine, significantly lowering aircraft performance and increasing the power required to fly."
  },
  {
    question: "What does a steady 'FUEL FILTER' caution light indicate on the UH-1H annunciator panel?",
    answers: [
      "The fuel filter is restricted by contamination, and fuel is bypassing the filter to maintain engine flow.",
      "The main fuel tank is contaminated with water, and the pilot must immediately land and drain the sumps.",
      "The fuel boost pumps have failed, and the engine is now drawing fuel strictly via mechanical suction.",
      "The fuel quantity sensor is blocked, and the cockpit fuel gauges are no longer displaying accurate levels."
    ],
    correct: 0,
    explanation: "A 'FUEL FILTER' light indicates the fuel filter is clogged. When this happens, a bypass valve opens to ensure fuel continues to reach the engine, but this un-filtered fuel poses a risk of damaging fuel control components."
  },
  {
    question: "During an autorotation, what is the effect of extending a turn on the main rotor RPM (Nr) of the UH-1H?",
    answers: [
      "The rotor RPM will increase due to the increased disk loading and updraft through the rotor system during the turn.",
      "The rotor RPM will decrease rapidly because of the increased drag on the tail boom assembly during a turn.",
      "The rotor RPM will remain completely unchanged, as the mechanical governor continues to control blade pitch.",
      "The rotor RPM will decay to zero immediately, forcing the helicopter into an uncontrolled vertical descent."
    ],
    correct: 0,
    explanation: "When a helicopter turns during an autorotation, G-loading (disk loading) increases. This forces more air up through the rotor system, which increases rotor RPM. The pilot may need to raise collective slightly to prevent an overspeed."
  },
  {
    question: "What is the primary indicator of a failing main transmission in the UH-1H, and what is the correct action?",
    answers: [
      "Fluctuating oil pressure, rising oil temperature, and chip light; reduce power and land as soon as possible.",
      "Rapidly rising engine RPM, falling torque, and generator failure; immediately enter a steady-state autorotation.",
      "Loud grinding noises from the cabin roof, and anti-torque pedal vibration; immediately shut down the engine.",
      "The master caution light illuminates, and the cyclic control locks up completely; pull maximum collective pitch."
    ],
    correct: 0,
    explanation: "A transmission failure is indicated by abnormal oil pressure/temperature or a 'CHIP' light (indicating metal particles in the oil). The pilot must minimize the load on the gears by reducing power and landing as soon as possible."
  },
  {
    question: "How does 'Dissymmetry of Lift' affect the UH-1H in forward flight, and how is it aerodynamically compensated?",
    answers: [
      "The advancing blade produces more lift than the retreating blade; compensated by rotor blade flapping and cyclic feathering.",
      "The retreating blade produces more lift than the advancing blade; compensated by automatic engine governor fuel adjustments.",
      "The left side of the disk produces more lift than the right side; compensated by adjusting the sync elevators on the tail.",
      "The rear of the disk produces more lift than the front of the disk; compensated by applying right anti-torque pedal inputs."
    ],
    correct: 0,
    explanation: "In forward flight, the advancing blade experiences higher relative wind than the retreating blade, creating unequal lift. The semi-rigid rotor system compensates through flapping: the advancing blade flaps up (decreasing its angle of attack) and the retreating blade flaps down (increasing its angle of attack)."
  },
  {
    question: "What is the function of the auxiliary fuel tanks (if installed) in the UH-1H, and how is their fuel transferred?",
    answers: [
      "They extend flight range; fuel is transferred to the main tank via electrical transfer pumps controlled in the cockpit.",
      "They feed directly into the engine fuel lines; fuel is drawn via engine suction when the main tank runs dry.",
      "They balance the center of gravity; fuel is pumped back and forth automatically by the stabilization system.",
      "They store extra hydraulic fluid; fluid is transferred to the primary lines when system pressure drops below limits."
    ],
    correct: 0,
    explanation: "Auxiliary fuel tanks are used to extend range. This fuel is not fed directly to the engine; instead, electrical pumps transfer the fuel from the auxiliary tanks into the main fuel tank, where it is then pumped to the engine."
  },
  {
    question: "What does the 'CHIP DETECTOR' warning light indicate for the tail rotor gearbox of the UH-1H?",
    answers: [
      "Metal particles have accumulated in the tail rotor gearbox oil, indicating potential internal gear or bearing failure.",
      "The tail rotor drive shaft has slipped out of alignment, and the tail rotor is operating at reduced RPM.",
      "The anti-torque pedal control cables have frayed and are catching on the internal pulleys inside the tail boom.",
      "The tail rotor gearbox oil level is extremely low, and the gearbox is running dry without any lubrication."
    ],
    correct: 0,
    explanation: "The tail rotor gearbox chip detector uses a magnetic plug. If metal flakes (chips) from failing gears or bearings bridge the plug's gap, the caution light illuminates, warning the pilot of an impending mechanical failure."
  },
  {
    question: "What is 'Retreating Blade Stall' in the UH-1H, and what is the primary pilot warning sign?",
    answers: [
      "A stall on the retreating blade at high speed; indicated by a low-frequency vibration followed by a pitch-up and left roll.",
      "A stall on the advancing blade at low speed; indicated by a high-pitched whine followed by a nose-down and right roll.",
      "A stall on the tail rotor blades in high winds; indicated by a rapid spin to the left and loss of collective control.",
      "A stall on both main rotor blades during low-G; indicated by a sudden master caution light and engine flameout."
    ],
    correct: 0,
    explanation: "As forward speed increases, the retreating blade must operate at a higher angle of attack to keep lift equal. If speed is too high, the blade stalls, causing a severe low-frequency vibration, followed by an uncommanded nose pitch-up and a roll to the left (the retreating side)."
  },
  {
    question: "What is the purpose of the bleed band on the compressor section of the UH-1H Lycoming T53 engine?",
    answers: [
      "It vents excess air during engine startup and low RPM to prevent compressor stalls from occurring.",
      "It seals the compressor casing to prevent high-pressure air leaks during high-torque flight operations.",
      "It redirects exhaust gases back into the intake to warm the incoming air during cold weather flights.",
      "It acts as a mechanical brake to stop the turbine from spinning after the fuel switch is turned off."
    ],
    correct: 0,
    explanation: "During startup and low engine speeds, the compressor produces more air than the turbine can ingest. The bleed band automatically opens to vent this excess air, stabilizing the compressor and preventing compressor stalls."
  },
  {
    question: "How does a pilot check for proper operation of the hydraulic system during the pre-flight checks of the UH-1H?",
    answers: [
      "By turning the hydraulic switch OFF and cycling the flight controls to feel the heavy force required to move them.",
      "By checking the hydraulic accumulator pressure gauge on the overhead console to ensure it reads zero.",
      "By pulling full collective rapidly with the engine at idle and checking that the rotor blades do not flap.",
      "By holding the anti-torque pedals in a crossed position and checking that the master caution light stays off."
    ],
    correct: 0,
    explanation: "To test the hydraulics, the pilot flips the hydraulic switch to 'OFF' during ground checks. This removes hydraulic assist, letting the pilot cycle the controls manually to verify that the mechanical linkages are intact and functioning under high load."
  },
  {
    question: "What is the significance of the 'N1' gauge on the UH-1H instrument panel, and what does it indicate?",
    answers: [
      "It displays the gas producer turbine speed as a percentage, indicating compressor and gas generator section RPM.",
      "It displays the free power turbine speed as a percentage, which is directly coupled to the main rotor system.",
      "It displays the main rotor RPM as a percentage, which must be maintained between 90% and 110% during flight.",
      "It displays the tail rotor gearbox output speed, which is critical for maintaining anti-torque effectiveness."
    ],
    correct: 0,
    explanation: "N1 represents the gas producer (compressor) section RPM. This turbine compresses air and generates hot gases, but it is mechanically independent of the power turbine (N2) that drives the rotor system."
  },
  {
    question: "During a practice autorotation, what is the effect of a delayed collective application (flare) on landing forces?",
    answers: [
      "Ground contact forces increase dramatically due to insufficient rotor energy remaining to cushion the touchdown.",
      "Ground contact forces decrease because the skids have more time to compress and absorb energy progressively.",
      "Ground contact forces remain identical as long as the rotor RPM stays within the normal operating range.",
      "Ground contact forces reduce to zero because the delayed flare allows the helicopter to settle gently on the surface."
    ],
    correct: 0,
    explanation: "The collective flare converts rotor kinetic energy (RPM) into additional lift to slow descent. Delaying this flare allows rotor RPM to decay and wastes stored energy, resulting in a hard touchdown with high impact forces."
  },
  {
    question: "What is the purpose of the 'N2' tachometer needle split from the 'NR' needle on the dual tachometer?",
    answers: [
      "It indicates a drivetrain malfunction or governor failure causing engine and rotor speeds to separate.",
      "It shows the pilot has manually disengaged the engine clutch and is operating in pure autorotation mode.",
      "It confirms the engine is producing maximum continuous power and is operating within normal parameters.",
      "It verifies the tail rotor drive shaft is synchronized correctly with the main transmission output speed."
    ],
    correct: 0,
    explanation: "In normal operations, N2 (power turbine/engine output) and NR (rotor RPM) are synchronized via the transmission and should indicate the same value. A split indicates a mechanical failure, governor malfunction, or loss of drive coupling."
  },
  {
    question: "What is the maximum allowable sideward or rearward flight speed in the UH-1H, and why is it limited?",
    answers: [
      "15 knots, to prevent tail rotor strikes from excessive tail boom rise and main rotor flapping limits.",
      "30 knots, to prevent engine overspeed from increased cooling airflow entering the turbine inlet area.",
      "45 knots, to prevent hydraulic system failure from reversed aerodynamic loads on the servo actuators.",
      "60 knots, to prevent structural failure of the tail boom from excessive aerodynamic buffeting forces."
    ],
    correct: 0,
    explanation: "Rearward and sideward flight is limited to 15 knots. At higher speeds, the main rotor disk tilts excessively, causing the tail boom to rise and potentially strike the main rotor blades—a catastrophic failure mode."
  },
  {
    question: "What is 'Coning Angle' in the UH-1H rotor system, and what does an excessive coning angle indicate?",
    answers: [
      "The upward deflection of the rotor blades due to lift forces; excessive coning indicates high gross weight or density altitude.",
      "The forward tilt of the rotor mast during cruise flight; excessive coning indicates cyclic control rigging issues.",
      "The lateral twist of the rotor blades during turns; excessive coning indicates a main transmission bearing failure.",
      "The downward droop of the blades at rest; excessive coning indicates hydraulic pressure loss in the servo system."
    ],
    correct: 0,
    explanation: "Coning angle is the upward bend of the rotor blades caused by lift forces opposing centrifugal forces. Excessive coning (steep upward angle) indicates high disk loading from heavy gross weight or operation at high density altitude."
  },
  {
    question: "How does the UH-1H pilot recognize an impending main rotor overspeed condition during an autorotation?",
    answers: [
      "The rotor tachometer needle approaches or exceeds the upper red line, and a high-frequency vibration may develop.",
      "The collective lever becomes extremely heavy and difficult to move due to increased aerodynamic blade loading.",
      "The anti-torque pedals lose all effectiveness, and the nose yaws uncontrollably to the right during descent.",
      "The engine exhaust gas temperature rapidly increases, and the turbine section emits a high-pitched whining noise."
    ],
    correct: 0,
    explanation: "Rotor overspeed is indicated by the NR needle approaching or exceeding the red line (typically above 324 RPM or 108%). The pilot must raise collective to increase blade drag and slow the rotor down to prevent structural damage."
  },
  {
    question: "What emergency procedure should be followed if the UH-1H experiences a complete electrical failure at night?",
    answers: [
      "Use the standby magnetic compass and attitude indicator for reference; land as soon as practical using backup instruments.",
      "Immediately enter autorotation and execute a forced landing in the nearest open area to minimize flight time.",
      "Increase altitude to 5,000 feet AGL and circle until the battery backup system automatically resets the generators.",
      "Shut down the engine and restart it using the emergency APU to reset all electrical buses and restore full power."
    ],
    correct: 0,
    explanation: "A complete electrical failure eliminates most flight instruments, radios, and lighting. The pilot must rely on backup instruments (standby compass, attitude indicator) and plan an immediate precautionary landing in a suitable area."
  },
  {
    question: "What is the primary cause of 'Porpoising' during a UH-1H autorotation, and how is it corrected?",
    answers: [
      "Overcorrecting with cyclic inputs causes oscillations in pitch; correction requires smooth, minimal control inputs.",
      "A failed hydraulic servo causes the cyclic to bind and release; correction requires turning off the hydraulic system.",
      "Excessive rotor RPM creates aerodynamic flutter; correction requires raising collective to maximum blade pitch.",
      "The tail rotor has entered vortex ring state; correction requires applying full left pedal and reducing airspeed."
    ],
    correct: 0,
    explanation: "Porpoising (pitch oscillations) during autorotation is typically caused by overcontrolling with the cyclic. The pilot must make small, smooth inputs and allow the helicopter to stabilize naturally between corrections."
  },
  {
    question: "What does the 'INST' caution light indicate on the UH-1H caution panel?",
    answers: [
      "The primary AC instrument power bus has failed; the inverter has switched instruments to backup DC power.",
      "The altimeter pressure setting has drifted out of tolerance and must be reset immediately to avoid altitude errors.",
      "The vertical speed indicator has failed and is displaying erroneous climb/descent rate information to the pilot.",
      "The attitude indicator gyro has toppled and must be re-caged by pressing the instrument reset button."
    ],
    correct: 0,
    explanation: "The 'INST' light warns of a failure in the primary AC instrument power supply. Critical flight instruments automatically switch to backup power from the DC inverter system."
  },
  {
    question: "What is the function of the collective friction lock in the UH-1H?",
    answers: [
      "It allows the pilot to lock the collective lever in position to reduce pilot fatigue during extended cruise flight.",
      "It prevents the collective from being lowered below a minimum setting to avoid main rotor blade stall in flight.",
      "It mechanically disconnects the collective from the rotor pitch links during autorotation to protect the servos.",
      "It automatically engages at high airspeeds to prevent inadvertent collective movements that could overstress the blades."
    ],
    correct: 0,
    explanation: "The collective friction lock is a pilot-adjustable mechanism that applies resistance to collective movement. It can be tightened to hold the collective in position during cruise, reducing pilot workload and arm fatigue."
  },
  {
    question: "During a power-on stall recovery in the UH-1H, what is the immediate corrective action?",
    answers: [
      "Lower the collective immediately to reduce angle of attack, apply forward cyclic to level the rotor disk, and add power smoothly.",
      "Raise the collective to maximum pitch, apply aft cyclic to increase rotor disk loading, and reduce throttle to idle.",
      "Apply full right pedal to counteract torque, lower collective fully, and enter a stabilized autorotation descent.",
      "Increase airspeed to VNE, raise collective to maximum, and execute a climbing right turn to regain lost altitude."
    ],
    correct: 0,
    explanation: "A power-on stall (settling with power/vortex ring state) is recovered by reducing collective to decrease the descent rate into the vortex, applying forward cyclic to gain translational lift, and smoothly adding power once out of the stall."
  },
  {
    question: "What is the maximum demonstrated crosswind velocity for takeoff and landing operations in the UH-1H?",
    answers: [
      "17 knots, as demonstrated during aircraft certification flight testing under standard atmospheric conditions.",
      "25 knots, as the aircraft's tail rotor authority allows full directional control at this wind speed.",
      "35 knots, as the hydraulic system maintains full control effectiveness up to this crosswind component.",
      "50 knots, as the sync elevators provide sufficient aerodynamic stability to compensate for the wind."
    ],
    correct: 0,
    explanation: "The UH-1H has a demonstrated crosswind limit of 17 knots. While operations may be possible in higher crosswinds, this is the maximum tested and certified by the manufacturer under normal conditions."
  },
  {
    question: "How does the UH-1H pilot identify a compressor inlet blockage during engine start?",
    answers: [
      "N1 RPM fails to accelerate properly, EGT rises abnormally high, and the start sequence must be aborted immediately.",
      "N2 RPM overspeeds beyond limits, the rotor blades begin spinning uncontrollably, and hydraulic pressure drops to zero.",
      "The fuel flow gauge indicates zero flow, oil pressure remains at zero, and the master caution light remains dark.",
      "The main rotor begins spinning backward, the generator warning light illuminates, and torque indicates negative values."
    ],
    correct: 0,
    explanation: "A blocked compressor inlet (e.g., from a cover, debris, or ice) prevents proper airflow. N1 (gas producer) fails to accelerate, and Exhaust Gas Temperature (EGT) rises dangerously due to restricted combustion airflow."
  },
  {
    question: "What is the effect of operating the UH-1H with the center of gravity (CG) near the aft limit?",
    answers: [
      "Reduced longitudinal stability, increased sensitivity to cyclic inputs, and potential difficulty recovering from rearward flight.",
      "Improved fuel efficiency due to reduced drag from the optimized rotor disk angle during cruise operations.",
      "Increased tail rotor effectiveness due to longer moment arm providing greater anti-torque authority in hover.",
      "Decreased hover power requirements due to the main rotor mast being aligned with the aircraft's center of lift."
    ],
    correct: 0,
    explanation: "An aft CG reduces longitudinal stability, making the helicopter more sensitive to pitch inputs. It increases the risk of losing control in rearward flight and may require excessive forward cyclic to maintain level flight."
  },
  {
    question: "What is the primary aerodynamic concern when conducting formation flight at low altitude in the UH-1H?",
    answers: [
      "Downwash from lead aircraft can severely reduce lift and cause a rapid, unexpected descent in trail aircraft.",
      "Tail rotor interference from multiple helicopters creates uncontrollable yaw oscillations in the formation.",
      "Main rotor blade tip vortices from adjacent aircraft cause immediate structural failure of the rotor system.",
      "Engine intake suction from surrounding aircraft causes compressor stalls and flameouts in all formation members."
    ],
    correct: 0,
    explanation: "Flying in the downwash of a lead helicopter significantly reduces lift for trail aircraft. At low altitude, this can cause an unexpected descent with insufficient altitude to recover before ground impact."
  },
  {
    question: "What does the 'HYD PRESS' caution light indicate, and what is the immediate pilot action?",
    answers: [
      "Hydraulic system pressure has dropped below safe limits; check pressure gauge and prepare for manual flight if pressure is lost.",
      "The hydraulic reservoir is overfilled; immediately turn off boost pumps to prevent system damage from overpressure.",
      "The hydraulic accumulator has burst; immediately land and shut down to prevent contamination of the hydraulic fluid.",
      "The cyclic servo has locked up; immediately release the hydraulic override handle to restore manual control inputs."
    ],
    correct: 0,
    explanation: "The 'HYD PRESS' light indicates low hydraulic pressure, which means flight control servo assistance is degraded or lost. The pilot must verify pressure on the gauge and prepare for high control forces if hydraulics fail completely."
  },
  {
    question: "What is the recommended technique for a run-on landing in the UH-1H?",
    answers: [
      "Maintain 20-30 knots groundspeed, level the skids parallel to direction of travel, and smoothly lower collective on touchdown.",
      "Achieve 50-60 knots groundspeed, touch down on the aft skids first, then apply aft cyclic to drag the forward skids.",
      "Maintain 5-10 knots groundspeed, touch down on one skid only, then use cyclic to pivot the aircraft to a stop.",
      "Achieve zero groundspeed in a hover, apply full forward cyclic, then slam the collective down for an immediate stop."
    ],
    correct: 0,
    explanation: "A run-on landing requires maintaining forward groundspeed (20-30 knots), keeping the skids level and aligned with the direction of travel, and smoothly lowering collective as the skids contact and slide along the surface to dissipate energy."
  },
  {
    question: "What is the purpose of the 'GOV' switch on the UH-1H overhead panel, and what happens when it is placed in 'EMER' position?",
    answers: [
      "It disengages the automatic governor; the pilot must manually control engine RPM using the throttle twist grip on the collective.",
      "It activates the emergency backup governor stored in the tail boom, which takes over N1/N2 speed control automatically.",
      "It locks the current throttle position and prevents any further fuel flow adjustments from occurring during flight.",
      "It triggers an automatic engine shutdown sequence and prepares the helicopter for an immediate autorotation descent."
    ],
    correct: 0,
    explanation: "The governor switch in 'EMER' position disengages the automatic fuel control governor. The pilot must then manually twist the throttle grip to maintain proper N1/N2 and rotor RPM."
  },
  {
    question: "What is the effect of increasing gross weight on the UH-1H's autorotation performance?",
    answers: [
      "Rate of descent increases, and rotor RPM increases for the same collective setting due to higher disk loading.",
      "Rate of descent decreases, and rotor RPM decreases due to increased inertial mass in the rotor system.",
      "Rate of descent remains constant, but the landing flare requires less collective due to momentum effects.",
      "Rate of descent remains constant, but touchdown speeds must be reduced to prevent skid structural damage."
    ],
    correct: 0,
    explanation: "Higher gross weight increases disk loading, which increases both the rate of descent and rotor RPM during autorotation. The increased weight requires more upward airflow through the rotor to maintain RPM in the normal range."
  },
  {
    question: "What is 'Gyroscopic Precession' in the UH-1H rotor system, and how does it affect flight control?",
    answers: [
      "A force applied to a spinning rotor takes effect 90 degrees later in the direction of rotation, requiring cyclic phase lag.",
      "A force applied to the engine turbine causes an immediate and opposite reaction in the tail rotor drive system.",
      "A force applied to the collective lever causes a proportional change in anti-torque pedal position automatically.",
      "A force applied to the sync elevators causes an immediate pitch change in the main rotor disk without cyclic input."
    ],
    correct: 0,
    explanation: "Gyroscopic precession means a force applied to the spinning rotor disk takes effect 90 degrees later in the rotation direction. This requires the swashplate to be rigged with a phase lag so cyclic inputs produce the desired rotor tilt."
  },
  {
    question: "What is the correct procedure for starting the UH-1H engine in cold weather (below 0°C)?",
    answers: [
      "Use external pre-heating or engine inlet covers, ensure battery is fully charged, monitor EGT closely during start sequence.",
      "Engage the starter immediately without pre-heating, as the combustion process will rapidly warm the engine components.",
      "Pre-heat the hydraulic fluid only, as the engine will self-heat once fuel ignition begins inside the combustion chamber.",
      "Disable the automatic governor, manually advance throttle to full, then engage the starter for a hot start sequence."
    ],
    correct: 0,
    explanation: "Cold weather starts require careful monitoring. External pre-heating prevents sluggish oil flow and starter motor strain. EGT must be watched closely as cold-soaked components can cause abnormal combustion temperatures during start."
  },
  {
    question: "What is the primary structural limitation that determines the UH-1H's maximum gross weight?",
    answers: [
      "The main rotor mast's maximum bending stress and the transmission's torque handling capacity under full power.",
      "The skid landing gear's compression strength and energy absorption capability during hard landings.",
      "The engine's maximum continuous power output rating and fuel pump delivery capacity at high altitude.",
      "The tail rotor drive shaft's torsional stress limit and the gearbox's maximum input torque rating."
    ],
    correct: 0,
    explanation: "Maximum gross weight is primarily limited by the structural strength of the main rotor mast and transmission. Exceeding max gross weight can overstress these components, risking catastrophic structural failure."
  },
  {
    question: "What is the danger of a 'Hot Start' during the UH-1H engine start sequence?",
    answers: [
      "Exhaust gas temperature exceeds safe limits, potentially causing turbine blade damage or complete engine destruction.",
      "The starter motor overheats and fails, requiring replacement before the next start attempt can be made.",
      "The fuel control unit freezes in the open position, flooding the combustion chamber with excess fuel.",
      "The main generator overloads and trips offline, preventing the battery from recharging during flight."
    ],
    correct: 0,
    explanation: "A hot start occurs when excessive fuel enters the combustion chamber before sufficient airflow exists, causing EGT to spike above limits (typically above 900°C). This can warp or destroy the turbine blades."
  },
  {
    question: "During a UH-1H autorotation with a strong tailwind, what adjustment must the pilot make?",
    answers: [
      "Increase forward airspeed to maintain adequate rotor RPM, as groundspeed will be higher than normal at touchdown.",
      "Decrease forward airspeed to zero to prevent excessive groundspeed, then execute a vertical touchdown with full flare.",
      "Maintain standard autorotation airspeed regardless of wind; groundspeed has no effect on rotor energy management.",
      "Execute a turn into the wind before landing to eliminate all groundspeed components for a stationary touchdown."
    ],
    correct: 0,
    explanation: "Autorotation glide is based on airspeed, not groundspeed. A tailwind increases groundspeed, so the pilot must increase forward airspeed to maintain proper rotor RPM and energy, resulting in a faster landing run."
  },
  {
    question: "What is the function of the 'FORCE TRIM' system (if installed) on the UH-1H?",
    answers: [
      "It electrically repositions flight control servo positions to relieve constant control pressures during steady flight.",
      "It mechanically locks the cyclic in the neutral position to prevent uncommanded flight control movements.",
      "It automatically adjusts collective pitch to maintain a constant altitude during cruise flight operations.",
      "It uses hydraulic accumulators to dampen control feedback vibrations transmitted through the control linkages."
    ],
    correct: 0,
    explanation: "Force trim allows the pilot to 'set' the current control position by pressing a button, which electrically repositions the hydraulic servos to hold that position without the pilot maintaining constant pressure on the controls."
  },
  {
    question: "What is the maximum cabin door-open flight speed in the UH-1H, and why is it limited?",
    answers: [
      "100 KIAS, to prevent aerodynamic loads from ripping the doors off their hinges or damaging the door structure.",
      "50 KIAS, to prevent crew members from being ejected from the cabin due to extreme dynamic pressure.",
      "120 KIAS, to prevent the main rotor downwash from entering the cabin and disrupting instrument readings.",
      "80 KIAS, to prevent engine intake suction from drawing objects out of the cabin through the open doors."
    ],
    correct: 0,
    explanation: "Open doors create significant aerodynamic drag and structural loads. The 100 KIAS limit prevents damage to door hinges, latches, and structure from excessive dynamic pressure at high speeds."
  },
  {
    question: "What is the correct recovery procedure if the UH-1H enters an uncontrolled right yaw (loss of anti-torque)?",
    answers: [
      "Reduce collective to minimum power, enter autorotation if necessary, and execute a run-on landing into the yaw.",
      "Increase collective to maximum power, apply full left pedal, and climb to gain altitude for recovery attempts.",
      "Shut down the engine completely, apply right pedal to stop the spin, and restart the engine in flight.",
      "Apply full aft cyclic to reduce forward speed, raise collective, and attempt to hover out of ground effect."
    ],
    correct: 0,
    explanation: "An uncontrolled right yaw indicates tail rotor failure or unarrested LTE. The pilot must reduce power (lowering collective) to reduce torque reaction, enter autorotation if needed, and land immediately with the yaw."
  },
  {
    question: "How does the UH-1H transmission oil cooling system work, and what indicates a cooling system failure?",
    answers: [
      "Ram air passes through an oil cooler; failure is indicated by rising transmission oil temperature beyond normal limits.",
      "Engine bleed air cools the transmission directly; failure is indicated by dropping N1 speed and rising EGT.",
      "The main rotor wash provides cooling; failure is indicated by reduced rotor RPM and low frequency vibration.",
      "An electric fan cools the oil reservoir; failure is indicated by the master caution light and generator offline."
    ],
    correct: 0,
    explanation: "The UH-1H uses ram air flowing through an oil cooler to regulate transmission temperature. A cooling failure causes transmission oil temperature to rise, potentially leading to oil breakdown and transmission failure."
  },
  {
    question: "What is the primary danger of operating the UH-1H near maximum density altitude limits?",
    answers: [
      "Insufficient power to maintain flight, risk of settling into terrain, and inability to climb out of confined areas.",
      "Excessive engine power causing turbine overspeed, transmission overload, and catastrophic drivetrain failure.",
      "Reduced tail rotor authority causing complete loss of directional control and uncontrollable spinning in hover.",
      "Increased fuel consumption causing rapid fuel starvation, engine flameout, and forced landing before destination."
    ],
    correct: 0,
    explanation: "High density altitude dramatically reduces available engine power and rotor efficiency. The helicopter may lack sufficient power to hover out of ground effect, climb, or maneuver safely, potentially causing controlled flight into terrain."
  }
];

// Fisher-Yates shuffle because I actually know what the fuck I'm doing
// Unlike whoever taught you to fly, apparently
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function initExam() {
  score = 0;
  currentQuestionIndex = 0;
  
  // Randomize questions so you can't just memorize the order like a cheating bastard
  const shuffledPool = shuffleArray([...QUESTION_POOL]);
  currentQuestions = shuffledPool.slice(0, 6);
  
  displayQuestion();
}

function displayQuestion() {
  answered = false;
  const question = currentQuestions[currentQuestionIndex];
  
  // Shuffle the answers too because we're not complete fucking idiots
  // Unlike you if you thought the answers were in order
  const correctText = question.answers[question.correct];
  const shuffledAnswers = shuffleArray([...question.answers]);
  const newCorrectIndex = shuffledAnswers.indexOf(correctText);
  
  question.tempAnswers = shuffledAnswers;
  question.tempCorrect = newCorrectIndex;
  
  const container = document.getElementById('question-container');
  container.innerHTML = `
    <div class="question-card">
      <div class="question-number">Question ${currentQuestionIndex + 1} of 6</div>
      <div class="question-text">${question.question}</div>
      <div class="answers" id="answers"></div>
      <div id="explanation-container"></div>
      <button class="btn next-btn hidden" id="next-btn" onclick="nextQuestion()">NEXT QUESTION</button>
    </div>
  `;
  
  const answersContainer = document.getElementById('answers');
  question.tempAnswers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersContainer.appendChild(btn);
  });
  
  updateProgress();
}

function checkAnswer(selectedIndex) {
  if (answered) return; // Why the fuck are you clicking twice? Reading comprehension much?
  
  answered = true;
  const question = currentQuestions[currentQuestionIndex];
  const answerButtons = document.querySelectorAll('.answer-btn');
  const explanationContainer = document.getElementById('explanation-container');
  
  // Disable all buttons so people stop spam-clicking like it's gonna change the answer
  answerButtons.forEach(btn => btn.disabled = true);
  
  if (selectedIndex === question.tempCorrect) {
    score++;
    answerButtons[selectedIndex].classList.add('correct');
  } else {
    answerButtons[selectedIndex].classList.add('incorrect');
    answerButtons[question.tempCorrect].classList.add('correct');
  }
  
  explanationContainer.innerHTML = `
    <div class="explanation">
      <strong>EXPLANATION:</strong> ${question.explanation}
    </div>
  `;
  
  document.getElementById('next-btn').classList.remove('hidden');
  updateProgress();
}

// Keep track of how badly you're doing (spoiler: probably pretty fucking badly)
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
  
  const percentage = ((score / 6) * 100).toFixed(1);
  const passed = score >= 6;
  
  resultContainer.innerHTML = `
    <div class="result-screen ${passed ? 'pass' : 'fail'}">
      <div class="result-status">${passed ? 'PASS' : 'FAIL'}</div>
      <div class="result-score">${score} / 6 (${percentage}%)</div>
      <div class="result-message">
        ${passed 
          ? 'You have passed the UH-1H Huey written examination. Complete the form below to transmit your scores and schedule your practical check-ride.'
          : 'You did not achieve the required 90% passing score. Review the operating manual and retry the examination.'}
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
  
  // Send to Discord webhook via Cloudflare Worker
  const CLOUDFLARE_WORKER_URL = 'https://arsenapapi.arsenalapi.workers.dev';
  
  const formResponse = document.getElementById('form-response');
  formResponse.classList.remove('hidden');
  formResponse.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>TRANSMITTING TO INSTRUCTOR CADRE...</p>
    </div>
  `;

  const discordUser = document.getElementById('discord').value;
  const callsignUser = document.getElementById('callsign').value;
  const availabilityUser = document.getElementById('availability').value;
  
  const examType = 'UH-1H Huey';
  const percentage = ((score / 6) * 100).toFixed(1);

  const discordPayload = {
    username: "Wardogs Flight Command",
    embeds: [
      {
        title: "🚨 NEW PILOT LICENSING APPLICATION 🚨",
        description: "A candidate has successfully passed the written examination and is ready for a practical evaluation.",
        color: 16763904,
        fields: [
          {
            name: "👤 Candidate Details",
            value: `**Discord:** ${discordUser}\n**Callsign:** ${callsignUser}`,
            inline: false
          },
          {
            name: "🛸 Exam Performance",
            value: `**Aircraft Track:** ${examType}\n**Score:** ${score} / 6 (${percentage}%)`,
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

  fetch(CLOUDFLARE_WORKER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(discordPayload)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to transmit application.');
    }
    
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
        <p>There was a connection issue forwarding your application to our database. Please take a screenshot of your passing score (${score}/6) and contact an instructor directly on Discord.</p>
      </div>
    `;
  });
}

initExam();