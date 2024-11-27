import { Hono } from 'hono'
import { Tasks } from './data/tasks'
import { Locations } from './data/locations'
import { LZs } from './data/lzs'
import { Factions } from './data/factions'
import { Keys } from './data/keys'
import { Items } from './data/items'
import { cache } from 'hono/cache'
import { favicon } from './icon'
import { cors } from 'hono/cors'

export type Env = {}

const app = new Hono<{ Bindings: Env }>()

app.use(
  '*',
  cors({
    origin: ['https://gzwmap.com', 'https://new.gzwmap.com', 'http://localhost:5173'],
    allowMethods: ['GET', 'OPTIONS'],
    allowHeaders: ['Content-Type']
  })
)

app.get(
  '*',
  cache({
    cacheName: 'gzwmap-api',
    cacheControl: 'max-age=3600',
  })
)

app.route("/favicon.ico", favicon);

app.get('/', (c) => {
  return c.text('API for gzwmap.com')
})

app.get('/tasks', (c) => {
  return c.json(Tasks)
})

// Retrieve specific task by ID
app.get('/tasks/:id', (c) => {
  const id = c.req.param('id')
  const task = Tasks.find((task) => task.id === id)
  if (!task) {
    return c.text('Task not found', 404)
  }
  return c.json(task)
})

app.get('/objectives', (c) => {
  return c.json(Tasks.flatMap((task) => task.objectives))
})

app.get('/objectives/:id', (c) => {
  const id = c.req.param('id')
  const objectives = Tasks.flatMap((task) => task.objectives)
  const objective = objectives.find((objective) => objective.id === id)
  if (!objective) {
    return c.text('Objective not found', 404)
  }
  return c.json(objective)
})

app.get('/locations', (c) => {
  return c.json(Locations)
})

// Retrieve specific location by ID
app.get('/locations/:id', (c) => {
  const id = c.req.param('id')
  const location = Locations.find((location) => location.id === id)
  if (!location) {
    return c.text('Location not found', 404)
  }
  return c.json(location)
})

app.get('/lzs', (c) => {
  return c.json(LZs)
})

// Retrieve specific LZ by ID
app.get('/lzs/:id', (c) => {
  const id = c.req.param('id')
  const lz = LZs.find((lz) => lz.id === id)
  if (!lz) {
    return c.text('LZ not found', 404)
  }
  return c.json(lz)
})

app.get('/factions', (c) => {
  return c.json(Factions)
})

// Retrieve specific faction by ID
app.get('/factions/:id', (c) => {
  const id = c.req.param('id')
  const faction = Factions.find((faction) => faction.id === id)
  if (!faction) {
    return c.text('Faction not found', 404)
  }
  return c.json(faction)
})

app.get('/keys', (c) => {
  return c.json(Keys)
})

// Retrieve specific key by ID
app.get('/keys/:id', (c) => {
  const id = c.req.param('id')
  const key = Keys.find((key) => key.id === id)
  if (!key) {
    return c.text('Key not found', 404)
  }
  return c.json(key)
})

app.get('/items', (c) => {
  return c.json(Items)
})

// Retrieve specific item (key) by ID
app.get('/items/:id', (c) => {
  const id = c.req.param('id')
  const item = Items.find((item) => item.id === id)
  if (!item) {
    return c.text('Item not found', 404)
  }
  return c.json(item)
})

export default app
