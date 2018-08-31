#Author-Jerome Briot
#Description-

import adsk.core, adsk.fusion, traceback

app = adsk.core.Application.cast(None)
ui = adsk.core.UserInterface.cast(None)
palette = adsk.core.Palette.cast(None)
ctrl = adsk.core.CommandControl.cast(None)

handlers = []

this_addin_name = 'Basic Calculator'
this_addin_version = '0.0.1'
this_addin_author = 'Jerome Briot'
this_addin_contact = 'jbtechlab@gmail.com'

# Event handler for the commandExecuted event.
class ShowPaletteCommandExecuteHandler(adsk.core.CommandEventHandler):
    def __init__(self):
        super().__init__()
    def notify(self, args):
        global palette, ui
        try:

            cmdDef = ui.commandDefinitions.itemById('showBasicCalculator')
            if palette.isVisible:
                palette.isVisible = False
                ctrl.commandDefinition.name = 'Show basic calculator'
                cmdDef.name = 'Show basic calculator'
            else:
                palette.isVisible = True
                ctrl.commandDefinition.name = 'Hide basic calculator'
                cmdDef.name = 'Hide basic calculator'

        except:
            ui.messageBox('Command executed failed: {}'.format(traceback.format_exc()), this_addin_name, 0, 0)

# Event handler for the commandCreated event.
class ShowPaletteCommandCreatedHandler(adsk.core.CommandCreatedEventHandler):
    def __init__(self):
        super().__init__()
    def notify(self, args):
        try:
            command = args.command
            onExecute = ShowPaletteCommandExecuteHandler()
            command.execute.add(onExecute)
            handlers.append(onExecute)
        except:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()), this_addin_name, 0, 0)

def run(context):

    global ui, app, palette, ctrl
    global process

    try:
        app = adsk.core.Application.get()
        ui  = app.userInterface

        qatRToolbar = ui.toolbars.itemById('QATRight')

        showPaletteCmdDef = ui.commandDefinitions.addButtonDefinition('showBasicCalculator', 'Show basic calculator', 'Display a basic calculator in Fusion 360', './resources')

        # Connect to Command Created event.
        onCommandCreated = ShowPaletteCommandCreatedHandler()
        showPaletteCmdDef.commandCreated.add(onCommandCreated)
        handlers.append(onCommandCreated)

        ctrl = qatRToolbar.controls.addCommand(showPaletteCmdDef, 'HealthStatusCommand', False)

        palette = ui.palettes.add('BasicCalculatorPalette', 'Basic Calculator', 'BCPalette.html', False, True, True, 180, 290)
        palette.setPosition(400,400)
        palette.isVisible = False

    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()), this_addin_name, 0, 0)


def stop(context):

    global palette

    try:

        cmdDef = ui.commandDefinitions.itemById('showBasicCalculator')
        if cmdDef:
            cmdDef.deleteMe()

        qatRToolbar = ui.toolbars.itemById('QATRight')
        cmd = qatRToolbar.controls.itemById('showBasicCalculator')
        if cmd:
            cmd.deleteMe()

        palette = ui.palettes.itemById('BasicCalculatorPalette')
        if palette:
            palette.deleteMe()

    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()), this_addin_name, 0, 0)
