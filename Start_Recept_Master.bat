@echo off
title Recept Master Pro Launcher
cd /d "%~dp0"
echo ================================================================
echo   🥩 RECEPT MASTER PRO - FLEISCHEREI REZEPTUREN
echo ================================================================
echo.
echo Launching local server and opening web browser...
echo.

py -3 run_app.py
if %ERRORLEVEL% NEQ 0 (
    python run_app.py
)

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Opening index.html directly in browser...
    start index.html
)

pause
