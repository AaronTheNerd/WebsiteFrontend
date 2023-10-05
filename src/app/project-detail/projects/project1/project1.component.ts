import { Component, Input } from "@angular/core";
import { IProject } from "src/app/interfaces/project";
import { ICommand } from "../../command.interface";
import { IProjectComponent } from "../../project.component";

@Component({
  selector: "app-project1",
  templateUrl: "./project1.component.html",
  styleUrls: ["./project1.component.scss"],
})
export class Project1Component implements IProjectComponent {
  @Input() project?: IProject = undefined;

  configs = `{
  "token": "BOT SECRET TOKEN",
  "app_id": 0, // The ID of the bot's application
  "dev_id": 0, // The ID of the developer maintaining the bot
  "guild_id": 0, // The ID of the server the bot is added to
  "command_prefix": "!",
  "case_insensitive": true,
  "spotify": {
    "client_id": "SPOTIFY API CLIENT ID",
    "client_secret": "SPOTIFY API CLIENT SECRET"
  },
  "cogs": {
    "dnd": {
      "enabled": true,
      "binding": {
        "enabled": false,
        "channel_id": -1
      }
    },
    "events": {
      "enabled": true,
      "binding": {
        "enabled": false,
        "channel_id": -1
      },
      "role_on_join": {
        "enabled": true,
        "role_id": 0 // The ID of the role that the user should be assigned
      },
      "random_insult_on_command": {
        "enabled": true,
        "delete_after": 3,
        "insult_chance": 0.99,
        "adjective_chance": 0.5,
        "adjectives": [...],
        "insults": [...]
      }
    },
    "misc": {
      "enabled": true,
      "binding": {
        "enabled": false,
        "channel_id": -1
      }
    },
    "youtube": {
      "enabled": true,
      "binding": {
        "enabled": true,
        "channel_id": 0 // The ID of the text channel the commands from this cog must be called from
      },
      "voteskip": {
        "exclude_idle": false,
        "requester_autoskip": false,
        "fraction": 0.51
      },
      "disconnect_timeout": 120,
      "lazy_load": 20,
      "max_lazy_load": 35,
      "delete_queue": 120
    },
    "admin": {
      "enabled": false,
      "binding": {
        "enabled": false
      }
    }
  }
}`;

  music_commands: ICommand[] = [
    {
      command: "join",
      description: "Connects the bot to a VC",
      example: "!join",
    },
    {
      command: "leave",
      description: "Disconnects the bot from a VC",
      example: "!leave",
    },
    {
      command: "now",
      description: "Displays the currently playing song",
      example: "!now",
    },
    {
      command: "pause",
      description: "Pauses the currently playing song",
      example: "!pause",
    },
    {
      command: "resume",
      description: "Resumes the currently playing song",
      example: "!resume",
    },
    {
      command: "stop",
      description: "Cancels the current song and clears the queue",
      example: "!stop",
    },
    {
      command: "skip",
      description:
        "Skips the current song (requires administrator permissions)",
      example: "!skip",
    },
    {
      command: "voteskip",
      description: "Starts a vote to skip the current song",
      example: "!voteskip",
    },
    {
      command: "queue",
      description: "Shows a page of queue",
      example: "!queue <page=1>",
    },
    {
      command: "shuffle",
      description: "Shuffles the queue",
      example: "!shuffle",
    },
    {
      command: "remove",
      description: "Removes a song at a given index",
      example: "!remove <index>",
    },
    {
      command: "loop",
      description: "Toggles whether the current song should loop",
      example: "!loop",
    },
    {
      command: "loopqueue",
      description: "Toggles whether the queue should loop",
      example: "!loopqueue",
    },
    {
      command: "play",
      description: "Adds a song to the queue and joins a VC if necessary",
      example: "!play <url | query>",
    },
    {
      command: "move",
      description: "Moves a song from an index to a new index",
      example: "!move <index_from> <index_to>",
    },
  ];

  dnd_commands: ICommand[] = [
    {
      command: "d4",
      description: "Rolls some D4",
      example: "!d4 <rolls=1>",
    },
    {
      command: "d6",
      description: "Rolls some D6",
      example: "!d6 <rolls=1>",
    },
    {
      command: "d8",
      description: "Rolls some D8",
      example: "!d8 <rolls=1>",
    },
    {
      command: "d10",
      description: "Rolls some D10",
      example: "!d10 <rolls=1>",
    },
    {
      command: "d12",
      description: "Rolls some D12",
      example: "!d12 <rolls=1>",
    },
    {
      command: "d20",
      description: "Rolls some D20",
      example: "!d20 <rolls=1>",
    },
    {
      command: "d100",
      description: "Rolls some D100",
      example: "!d100 <rolls=1>",
    },
    {
      command: "rolladv",
      description: "Rolls a dice with advantage",
      example: "!rolladv <sides>",
    },
    {
      command: "rolldis",
      description: "Rolls a dice with disadvantage",
      example: "!rolldis <sides>",
    },
  ];

  misc_commands: ICommand[] = [
    {
      command: "hello",
      description: "Sends a Hello, World! message",
      example: "!hello",
    },
    {
      command: "fact",
      description: "Uses a third-party module to send a random fact",
      example: "!fact",
    },
  ];
}
