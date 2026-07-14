CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN (
    'estimate',
    'contact',
    'job_application',
    'partner_application',
    'footer_lead',
    'chat_message'
  )),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN (
    'new',
    'reviewing',
    'resolved',
    'archived'
  )),
  source_path TEXT NOT NULL DEFAULT '/',
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  file_name TEXT,
  file_type TEXT,
  file_size INTEGER CHECK (file_size IS NULL OR file_size >= 0),
  file_data BYTEA,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS form_submissions_created_at_idx
  ON form_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS form_submissions_type_idx
  ON form_submissions (type);

CREATE INDEX IF NOT EXISTS form_submissions_status_idx
  ON form_submissions (status);

CREATE TABLE IF NOT EXISTS request_rate_limits (
  bucket_key TEXT PRIMARY KEY,
  request_count INTEGER NOT NULL CHECK (request_count >= 0),
  reset_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
