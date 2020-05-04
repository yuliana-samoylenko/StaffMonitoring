const WALL_COLOR = '#000000';
const DOOR_COLOR = '#A63600';
const ZONE_COLOR = '#FFD173';
const INTERNAL_WALL_THICKNESS = 5;
const DOOR_THICKNESS = 5;
const EXTERNAL_WALL_THICKNESS = 15;

export const WIDTH_CANVAS = 1045;
export const HEIGHT_CANVAS = 600;

export const ELEMENTS_BUILDING = {
  walls: [
    //external walls
    { type: "wall", xStart: 0, yStart: 0, xEnd: 0, yEnd: HEIGHT_CANVAS, thickness: EXTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 0, yStart: 0, xEnd: WIDTH_CANVAS, yEnd: 0, thickness: EXTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 0, yStart: HEIGHT_CANVAS, xEnd: WIDTH_CANVAS, yEnd: HEIGHT_CANVAS, thickness: EXTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: WIDTH_CANVAS, yStart: HEIGHT_CANVAS, xEnd: WIDTH_CANVAS, yEnd: 0, thickness: EXTERNAL_WALL_THICKNESS, color: WALL_COLOR },

    //internal walls
    { type: "wall", xStart: 0, yStart: 190, xEnd: 500, yEnd: 190, thickness: INTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 570, yStart: 190, xEnd: 860, yEnd: 190, thickness: INTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 930, yStart: 190, xEnd: 1045, yEnd: 190, thickness: INTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 800, yStart: 192, xEnd: 800, yEnd: 0, thickness: INTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 330, yStart: 190, xEnd: 330, yEnd: 400, thickness: INTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 330, yStart: 470, xEnd: 330, yEnd: 600, thickness: INTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 660, yStart: 190, xEnd: 660, yEnd: 400, thickness: INTERNAL_WALL_THICKNESS, color: WALL_COLOR },
    { type: "wall", xStart: 660, yStart: 470, xEnd: 660, yEnd: 600, thickness: INTERNAL_WALL_THICKNESS, color: WALL_COLOR },
  ],

  doors: [
    { type: "door", xStart: 570, yStart: 189, xEnd: 635, yEnd: 235, thickness: DOOR_THICKNESS, color: DOOR_COLOR },
    { type: "door", xStart: 930, yStart: 189, xEnd: 995, yEnd: 235, thickness: DOOR_THICKNESS, color: DOOR_COLOR },
    { type: "door", xStart: 329, yStart: 400, xEnd: 375, yEnd: 335, thickness: DOOR_THICKNESS, color: DOOR_COLOR },
    { type: "door", xStart: 659, yStart: 470, xEnd: 615, yEnd: 535, thickness: DOOR_THICKNESS, color: DOOR_COLOR },
  ], 

  zones: [
    { type: "zone", id: 1, name: 'Высотные работы', xCenter: 108, yCenter: 58, width: 200, height: 100, color: ZONE_COLOR },
    { type: "zone", id: 2, name: 'Цех 1', xCenter: 920, yCenter: 98, width: 235, height: 180, color: ZONE_COLOR },
    { type: "zone", id: 3, name: 'Высокое напряжение', xCenter: 168, yCenter: 258, width: 319, height: 130, color: ZONE_COLOR },
    { type: "zone", id: 4, name: 'Спец оборудование', xCenter: 922, yCenter: 532, width: 230, height: 120, color: ZONE_COLOR }
  ]
};
