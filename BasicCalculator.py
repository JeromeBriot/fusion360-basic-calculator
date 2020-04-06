#Author-Jerome Briot
#Description-Display a basic calculator in Fusion 360

import adsk.core, adsk.fusion, traceback

app = adsk.core.Application.cast(None)
ui = adsk.core.UserInterface.cast(None)
palette = adsk.core.Palette.cast(None)
ctrl = adsk.core.CommandControl.cast(None)

handlers = []

thisAddinName = 'BasicCalculator'
thisAddinVersion = '0.3.0'
thisAddinAuthor = 'Jerome Briot'
thisAddinContact = 'jbtechlab@gmail.com'

# Event handler for the commandExecuted event.
class ShowPaletteCommandExecuteHandler(adsk.core.CommandEventHandler):
    def __init__(self):
        super().__init__()
    def notify(self, args):

        try:

            palette = ui.palettes.itemById(thisAddinName + 'Palette')
            if not palette:            
                palette = ui.palettes.add(thisAddinName + 'Palette', 'Basic Calculator', 'BCPalette.html', True, True, True, 185, 410, True)
                palette.setPosition(400,400)
            else:
                palette.isVisible = not(palette.isVisible)

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

        showPaletteCmdDef = ui.commandDefinitions.addButtonDefinition(thisAddinName + 'CmdDef', 'Basic calculator', 'Display a basic calculator in Fusion 360', './resources')

        # Connect to Command Created event.
        onCommandCreated = ShowPaletteCommandCreatedHandler()
        showPaletteCmdDef.commandCreated.add(onCommandCreated)
        handlers.append(onCommandCreated)

        ctrl = qatRToolbar.controls.addCommand(showPaletteCmdDef, 'HealthStatusCommand', False)

    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()), this_addin_name, 0, 0)


def stop(context):

    global palette

    try:

        palette = ui.palettes.itemById(thisAddinName + 'Palette')
        if palette:
            palette.deleteMe()

        cmdDef = ui.commandDefinitions.itemById(thisAddinName + 'CmdDef')
        if cmdDef:
            cmdDef.deleteMe()

        qatRToolbar = ui.toolbars.itemById('QATRight')
        cmd = qatRToolbar.controls.itemById(thisAddinName + 'CmdDef')
        if cmd:
            cmd.deleteMe()

    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()), this_addin_name, 0, 0)
