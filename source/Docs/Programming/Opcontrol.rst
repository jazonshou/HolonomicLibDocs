######################
Field Oriented Control
######################

Out of the numerous reasons why holonomic drivetrains are superior to traditional tank drives, 
one key reason is that field oriented control is possible. For those that do not know what 
field oriented control is, you can take a look at this `video <https://www.youtube.com/watch?v=50ZRrYFWPIc>`_

.. note::
    Okapi must be version 4.5.0 or higher for this to work. 

To use Okapi's ``fieldOrientedXArcade``, you must cast ``chassis`` to an ``XDriveModel``. 

.. code-block:: cpp
    
    std::shared_ptr<XDriveModel> model = std::static_pointer_cast<XDriveModel> (chassis->getModel());

Next, use a controller and the ``fieldOrientedXArcade`` method to move the chassis. 

.. code-block:: cpp
    :linenos:

    void opcontrol() {
        Controller controller = Controller();
        while(true) {
            model->fieldOrientedXArcade(master.getAnalog(ControllerAnalog::leftY), 
                                        master.getAnalog(ControllerAnalog::leftX), 
                                        master.getAnalog(ControllerAnalog::rightX), 
                                        // you can use an IMU as an alternative
                                        controller->getPose().theta.convert(degree), 
                                        0.05);

            pros::delay(10);
        }
    }

Here is a complete example: 

.. code-block:: cpp
    :linenos:

    std::shared_ptr<OdomChassisController> chassis = ChassisControllerBuilder()
        .withMotors(
            1,  // Top left
            -2, // Top right (reversed)
            -3, // Bottom right (reversed)
            4   // Bottom left
        )
        .withSensors(
            ADIEncoder{'A', 'B'}, // left encoder in ADI ports A & B
            ADIEncoder{'C', 'D', true},  // right encoder in ADI ports C & D (reversed)
            ADIEncoder{'E', 'F'}  // middle encoder in ADI ports E & F
        )
        // specify the tracking wheels diameter (2.75 in), track (7 in), and TPR (360)
        // specify the middle encoder distance (1 in) and diameter (2.75 in)
        .withOdometry({{2.75_in, 7_in, 1_in, 2.75_in}, quadEncoderTPR})
        .buildOdometry();

    std::shared_ptr<XDriveModel> model = std::static_pointer_cast<XDriveModel> (chassis->getModel());

    void opcontrol() {
        Controller controller = Controller();
        while(true) {
            model->fieldOrientedXArcade(master.getAnalog(ControllerAnalog::leftY), 
                                        master.getAnalog(ControllerAnalog::leftX), 
                                        master.getAnalog(ControllerAnalog::rightX), 
                                        // you can use an IMU as an alternative
                                        controller->getPose().theta.convert(degree), 
                                        0.05);

            pros::delay(10);
        }
    }

More information regarding the HolonomicLib API can be found `here <https://yessir120.github.io/HolonomicLib/html/index.html>`_