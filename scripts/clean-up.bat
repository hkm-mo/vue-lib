@echo off
REM Get the directory where this script is located
set SCRIPT_DIR=%~dp0
REM Change to the parent directory (project root)
cd /d "%SCRIPT_DIR%.."

REM Remove node_modules from root directory
if exist "node_modules" (
  echo Removing root node_modules...
  rmdir /s /q "node_modules"
)

REM Remove node_modules from all packages subdirectories
for /d %%D in (packages\*) do (
  if exist "%%D\node_modules" (
    echo Removing %%D\node_modules...
    rmdir /s /q "%%D\node_modules"
  )
)

REM Remove package-lock.json files
if exist "package-lock.json" (
  echo Removing root package-lock.json...
  del "package-lock.json"
)

for /d %%D in (packages\*) do (
  if exist "%%D\package-lock.json" (
    echo Removing %%D\package-lock.json...
    del "%%D\package-lock.json"
  )
)

echo Cleanup complete!