CREATE TABLE "User" (
  "id" TEXT PRIMARY KEY,
  "timezone" TEXT NOT NULL DEFAULT 'UTC',
  "units" TEXT NOT NULL DEFAULT 'metric',
  "sleepGoalMinutes" INTEGER NOT NULL DEFAULT 480,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "PolarConnection" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "polarUserId" TEXT,
  "accessTokenEncrypted" TEXT,
  "refreshTokenEncrypted" TEXT,
  "expiresAt" TIMESTAMP(3),
  "status" TEXT NOT NULL DEFAULT 'disconnected',
  "scope" TEXT,
  "sourceApiVersion" TEXT NOT NULL DEFAULT 'accesslink-v3',
  "updatedAt" TIMESTAMP(3) NOT NULL
);
CREATE UNIQUE INDEX "PolarConnection_userId_polarUserId_key" ON "PolarConnection"("userId","polarUserId");

CREATE TABLE "SyncRun" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completedAt" TIMESTAMP(3),
  "status" TEXT NOT NULL,
  "sourceVersion" TEXT NOT NULL,
  "cursor" TEXT,
  "recordsCreated" INTEGER NOT NULL DEFAULT 0,
  "recordsUpdated" INTEGER NOT NULL DEFAULT 0,
  "errorCode" TEXT,
  "errorMessage" TEXT
);

CREATE TABLE "WebhookEvent" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "sourceEventId" TEXT NOT NULL UNIQUE,
  "type" TEXT NOT NULL,
  "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "processedAt" TIMESTAMP(3),
  "payloadJson" JSONB NOT NULL,
  "signatureValid" BOOLEAN NOT NULL
);

CREATE TABLE "DailyActivity" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "localDate" TEXT NOT NULL,
  "sourceId" TEXT NOT NULL,
  "sourceApiVersion" TEXT NOT NULL,
  "sourceTimestamp" TIMESTAMP(3),
  "retrievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "sourceTimezone" TEXT,
  "steps" INTEGER,
  "activeCaloriesKcal" INTEGER,
  UNIQUE("userId","sourceId")
);
CREATE INDEX "DailyActivity_userId_localDate_idx" ON "DailyActivity"("userId","localDate");

CREATE TABLE "HeartRateSample" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "observedAt" TIMESTAMP(3) NOT NULL,
  "bpm" INTEGER NOT NULL,
  "sourceId" TEXT NOT NULL,
  "sourceApiVersion" TEXT NOT NULL,
  "retrievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("userId","sourceId")
);

CREATE TABLE "SleepSession" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "localDate" TEXT NOT NULL,
  "sourceId" TEXT NOT NULL,
  "sourceApiVersion" TEXT NOT NULL,
  "startTime" TIMESTAMP(3) NOT NULL,
  "endTime" TIMESTAMP(3) NOT NULL,
  "timeInBedSeconds" INTEGER NOT NULL,
  "timeAsleepSeconds" INTEGER,
  "stageJson" JSONB,
  "polarSleepScore" JSONB,
  "sourceTimezone" TEXT,
  "retrievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("userId","sourceId")
);
CREATE INDEX "SleepSession_userId_localDate_idx" ON "SleepSession"("userId","localDate");

CREATE TABLE "NightlyRecharge" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "localDate" TEXT NOT NULL,
  "sourceId" TEXT NOT NULL,
  "sourceApiVersion" TEXT NOT NULL,
  "rechargeStatus" TEXT,
  "hrvAvgMs" DOUBLE PRECISION,
  "overnightHeartRateBpm" DOUBLE PRECISION,
  "respiratoryRatePerMin" DOUBLE PRECISION,
  "componentJson" JSONB,
  "retrievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("userId","sourceId")
);
CREATE INDEX "NightlyRecharge_userId_localDate_idx" ON "NightlyRecharge"("userId","localDate");

CREATE TABLE "Exercise" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "sourceId" TEXT NOT NULL,
  "sourceApiVersion" TEXT NOT NULL,
  "startTime" TIMESTAMP(3) NOT NULL,
  "endTime" TIMESTAMP(3),
  "durationSeconds" INTEGER,
  "sport" TEXT,
  "distanceMeters" DOUBLE PRECISION,
  "caloriesKcal" INTEGER,
  "averageHeartRateBpm" INTEGER,
  "zoneJson" JSONB,
  "sourceTimezone" TEXT,
  "retrievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("userId","sourceId")
);

CREATE TABLE "ManualJournalEntry" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "localDate" TEXT NOT NULL,
  "rpe" INTEGER,
  "durationMinutes" INTEGER,
  "sport" TEXT,
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "ManualJournalEntry_userId_localDate_idx" ON "ManualJournalEntry"("userId","localDate");

CREATE TABLE "DerivedMetric" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
  "localDate" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "calculationVersion" TEXT NOT NULL,
  "value" JSONB NOT NULL,
  "inputProvenance" JSONB NOT NULL,
  "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "DerivedMetric_userId_localDate_name_idx" ON "DerivedMetric"("userId","localDate","name");
