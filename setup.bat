@echo off
echo Starting Miazo setup...
echo.

echo Installing dependencies...
call npm install

echo.
echo Setup complete! Starting development server...
echo.

call npm run dev

pause
