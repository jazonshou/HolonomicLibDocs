#########
Opcontrol
#########

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