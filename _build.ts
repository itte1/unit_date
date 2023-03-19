import * as esbuild from 'https://deno.land/x/esbuild@v0.15.10/mod.js'
import { denoPlugin } from 'https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts'

await esbuild.build({
  plugins: [denoPlugin()],
  entryPoints: ['./mod.ts'],
  outfile: './unit_date.js',
  bundle: true,
  minify: true,
  format: 'esm',
})
esbuild.stop()